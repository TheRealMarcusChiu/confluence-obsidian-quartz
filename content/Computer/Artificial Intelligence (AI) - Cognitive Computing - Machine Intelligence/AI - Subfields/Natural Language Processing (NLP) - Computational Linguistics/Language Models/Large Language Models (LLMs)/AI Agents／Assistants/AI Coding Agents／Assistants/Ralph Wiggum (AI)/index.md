---
title: "Ralph Wiggum (AI)"
created: 2026-01-25T15:23:32.282-06:00
modified: 2026-01-25T15:59:15.475-06:00
parent: "[[AI Coding Agents／Assistants]]"
children: []
---
###### Ralph Wiggum (AI)
````excerpt
- is an autonomous AI coding loop technique that enables AI agents to iteratively work on code tasks until a defined completion condition is met
- inspired by the persistent character from The Simpsons
- instead of a single prompt-and-review cycle, Ralph runs the same task repeatedly, allowing the AI to learn from its prior work via updated files and git history
````
^excerpt

# Ralph Script
- [How Ralph Works - Workflow](https://snarktank.github.io/ralph/)

> [!expand-ui]- Bash (original)
> ```bash
> #!/bin/bash
> # Ralph Wiggum - Long-running AI agent loop
> # Usage: ./ralph.sh [--tool amp|claude] [max_iterations]
>
> set -e
>
> # Parse arguments
> TOOL="amp"  # Default to amp for backwards compatibility
> MAX_ITERATIONS=10
>
> while [[ $# -gt 0 ]]; do
>   case $1 in
>     --tool)
>       TOOL="$2"
>       shift 2
>       ;;
>     --tool=*)
>       TOOL="${1#*=}"
>       shift
>       ;;
>     *)
>       # Assume it's max_iterations if it's a number
>       if [[ "$1" =~ ^[0-9]+$ ]]; then
>         MAX_ITERATIONS="$1"
>       fi
>       shift
>       ;;
>   esac
> done
>
> # Validate tool choice
> if [[ "$TOOL" != "amp" && "$TOOL" != "claude" ]]; then
>   echo "Error: Invalid tool '$TOOL'. Must be 'amp' or 'claude'."
>   exit 1
> fi
> SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
> PRD_FILE="$SCRIPT_DIR/prd.json"
> PROGRESS_FILE="$SCRIPT_DIR/progress.txt"
> ARCHIVE_DIR="$SCRIPT_DIR/archive"
> LAST_BRANCH_FILE="$SCRIPT_DIR/.last-branch"
>
> # Archive previous run if branch changed
> if [ -f "$PRD_FILE" ] && [ -f "$LAST_BRANCH_FILE" ]; then
>   CURRENT_BRANCH=$(jq -r '.branchName // empty' "$PRD_FILE" 2>/dev/null || echo "")
>   LAST_BRANCH=$(cat "$LAST_BRANCH_FILE" 2>/dev/null || echo "")
>   
>   if [ -n "$CURRENT_BRANCH" ] && [ -n "$LAST_BRANCH" ] && [ "$CURRENT_BRANCH" != "$LAST_BRANCH" ]; then
>     # Archive the previous run
>     DATE=$(date +%Y-%m-%d)
>     # Strip "ralph/" prefix from branch name for folder
>     FOLDER_NAME=$(echo "$LAST_BRANCH" | sed 's|^ralph/||')
>     ARCHIVE_FOLDER="$ARCHIVE_DIR/$DATE-$FOLDER_NAME"
>     
>     echo "Archiving previous run: $LAST_BRANCH"
>     mkdir -p "$ARCHIVE_FOLDER"
>     [ -f "$PRD_FILE" ] && cp "$PRD_FILE" "$ARCHIVE_FOLDER/"
>     [ -f "$PROGRESS_FILE" ] && cp "$PROGRESS_FILE" "$ARCHIVE_FOLDER/"
>     echo "   Archived to: $ARCHIVE_FOLDER"
>     
>     # Reset progress file for new run
>     echo "# Ralph Progress Log" > "$PROGRESS_FILE"
>     echo "Started: $(date)" >> "$PROGRESS_FILE"
>     echo "---" >> "$PROGRESS_FILE"
>   fi
> fi
>
> # Track current branch
> if [ -f "$PRD_FILE" ]; then
>   CURRENT_BRANCH=$(jq -r '.branchName // empty' "$PRD_FILE" 2>/dev/null || echo "")
>   if [ -n "$CURRENT_BRANCH" ]; then
>     echo "$CURRENT_BRANCH" > "$LAST_BRANCH_FILE"
>   fi
> fi
>
> # Initialize progress file if it doesn't exist
> if [ ! -f "$PROGRESS_FILE" ]; then
>   echo "# Ralph Progress Log" > "$PROGRESS_FILE"
>   echo "Started: $(date)" >> "$PROGRESS_FILE"
>   echo "---" >> "$PROGRESS_FILE"
> fi
>
> echo "Starting Ralph - Tool: $TOOL - Max iterations: $MAX_ITERATIONS"
>
> for i in $(seq 1 $MAX_ITERATIONS); do
>   echo ""
>   echo "==============================================================="
>   echo "  Ralph Iteration $i of $MAX_ITERATIONS ($TOOL)"
>   echo "==============================================================="
>
>   # Run the selected tool with the ralph prompt
>   if [[ "$TOOL" == "amp" ]]; then
>     OUTPUT=$(cat "$SCRIPT_DIR/prompt.md" | amp --dangerously-allow-all 2>&1 | tee /dev/stderr) || true
>   else
>     # Claude Code: use --dangerously-skip-permissions for autonomous operation, --print for output
>     OUTPUT=$(claude --dangerously-skip-permissions --print < "$SCRIPT_DIR/CLAUDE.md" 2>&1 | tee /dev/stderr) || true
>   fi
>   
>   # Check for completion signal
>   if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
>     echo ""
>     echo "Ralph completed all tasks!"
>     echo "Completed at iteration $i of $MAX_ITERATIONS"
>     exit 0
>   fi
>   
>   echo "Iteration $i complete. Continuing..."
>   sleep 2
> done
>
> echo ""
> echo "Ralph reached max iterations ($MAX_ITERATIONS) without completing all tasks."
> echo "Check $PROGRESS_FILE for status."
> exit 1
> ```

> [!expand-ui]- Python (Claude Generated)
> ```py
> #!/usr/bin/env python3
> """
> Ralph Wiggum - Long-running AI agent loop
> Usage: python ralph.py [--tool amp|claude] [max_iterations]
> """
>
> import sys
> import os
> import subprocess
> import json
> import re
> import argparse
> from pathlib import Path
> from datetime import datetime
> import time
>
> def parse_arguments():
>     """Parse command line arguments."""
>     parser = argparse.ArgumentParser(
>         description='Ralph Wiggum - Long-running AI agent loop'
>     )
>     parser.add_argument(
>         '--tool',
>         choices=['amp', 'claude'],
>         default='amp',
>         help='Tool to use (default: amp)'
>     )
>     parser.add_argument(
>         'max_iterations',
>         nargs='?',
>         type=int,
>         default=10,
>         help='Maximum number of iterations (default: 10)'
>     )
>     return parser.parse_args()
>
> def get_script_dir():
>     """Get the directory where this script is located."""
>     return Path(__file__).parent.resolve()
>
> def archive_previous_run(prd_file, progress_file, archive_dir, last_branch_file):
>     """Archive previous run if branch changed."""
>     if not prd_file.exists() or not last_branch_file.exists():
>         return
>     
>     try:
>         with open(prd_file, 'r') as f:
>             prd_data = json.load(f)
>             current_branch = prd_data.get('branchName', '')
>     except (json.JSONDecodeError, FileNotFoundError):
>         current_branch = ''
>     
>     try:
>         with open(last_branch_file, 'r') as f:
>             last_branch = f.read().strip()
>     except FileNotFoundError:
>         last_branch = ''
>     
>     if current_branch and last_branch and current_branch != last_branch:
>         # Archive the previous run
>         date_str = datetime.now().strftime('%Y-%m-%d')
>         # Strip "ralph/" prefix from branch name for folder
>         folder_name = re.sub(r'^ralph/', '', last_branch)
>         archive_folder = archive_dir / f"{date_str}-{folder_name}"
>         
>         print(f"Archiving previous run: {last_branch}")
>         archive_folder.mkdir(parents=True, exist_ok=True)
>         
>         if prd_file.exists():
>             subprocess.run(['cp', str(prd_file), str(archive_folder)], check=False)
>         if progress_file.exists():
>             subprocess.run(['cp', str(progress_file), str(archive_folder)], check=False)
>         
>         print(f"   Archived to: {archive_folder}")
>         
>         # Reset progress file for new run
>         with open(progress_file, 'w') as f:
>             f.write("# Ralph Progress Log\n")
>             f.write(f"Started: {datetime.now()}\n")
>             f.write("---\n")
>
> def track_current_branch(prd_file, last_branch_file):
>     """Track current branch."""
>     if not prd_file.exists():
>         return
>     
>     try:
>         with open(prd_file, 'r') as f:
>             prd_data = json.load(f)
>             current_branch = prd_data.get('branchName', '')
>         
>         if current_branch:
>             with open(last_branch_file, 'w') as f:
>                 f.write(current_branch)
>     except (json.JSONDecodeError, FileNotFoundError):
>         pass
>
> def initialize_progress_file(progress_file):
>     """Initialize progress file if it doesn't exist."""
>     if not progress_file.exists():
>         with open(progress_file, 'w') as f:
>             f.write("# Ralph Progress Log\n")
>             f.write(f"Started: {datetime.now()}\n")
>             f.write("---\n")
>
> def run_tool(tool, script_dir):
>     """Run the selected tool with the ralph prompt."""
>     try:
>         if tool == 'amp':
>             prompt_file = script_dir / 'prompt.md'
>             with open(prompt_file, 'r') as f:
>                 prompt_content = f.read()
>             
>             # Run amp with prompt from stdin
>             process = subprocess.Popen(
>                 ['amp', '--dangerously-allow-all'],
>                 stdin=subprocess.PIPE,
>                 stdout=subprocess.PIPE,
>                 stderr=subprocess.STDOUT,
>                 text=True
>             )
>             output, _ = process.communicate(input=prompt_content)
>         else:
>             # Claude Code
>             claude_file = script_dir / 'CLAUDE.md'
>             with open(claude_file, 'r') as f:
>                 claude_content = f.read()
>             
>             process = subprocess.Popen(
>                 ['claude', '--dangerously-skip-permissions', '--print'],
>                 stdin=subprocess.PIPE,
>                 stdout=subprocess.PIPE,
>                 stderr=subprocess.STDOUT,
>                 text=True
>             )
>             output, _ = process.communicate(input=claude_content)
>         
>         # Print output as it would appear in the original script
>         print(output, end='')
>         return output
>     
>     except Exception as e:
>         print(f"Error running tool: {e}", file=sys.stderr)
>         return ""
>
> def check_completion(output):
>     """Check if the output contains the completion signal."""
>     return '<promise>COMPLETE</promise>' in output
>
> def main():
>     """Main function."""
>     args = parse_arguments()
>     tool = args.tool
>     max_iterations = args.max_iterations
>     
>     script_dir = get_script_dir()
>     prd_file = script_dir / 'prd.json'
>     progress_file = script_dir / 'progress.txt'
>     archive_dir = script_dir / 'archive'
>     last_branch_file = script_dir / '.last-branch'
>     
>     # Archive previous run if branch changed
>     archive_previous_run(prd_file, progress_file, archive_dir, last_branch_file)
>     
>     # Track current branch
>     track_current_branch(prd_file, last_branch_file)
>     
>     # Initialize progress file
>     initialize_progress_file(progress_file)
>     
>     print(f"Starting Ralph - Tool: {tool} - Max iterations: {max_iterations}")
>     
>     for i in range(1, max_iterations + 1):
>         print()
>         print("=" * 63)
>         print(f"  Ralph Iteration {i} of {max_iterations} ({tool})")
>         print("=" * 63)
>         
>         # Run the selected tool
>         output = run_tool(tool, script_dir)
>         
>         # Check for completion signal
>         if check_completion(output):
>             print()
>             print("Ralph completed all tasks!")
>             print(f"Completed at iteration {i} of {max_iterations}")
>             sys.exit(0)
>         
>         print(f"Iteration {i} complete. Continuing...")
>         time.sleep(2)
>     
>     print()
>     print(f"Ralph reached max iterations ({max_iterations}) without completing all tasks.")
>     print(f"Check {progress_file} for status.")
>     sys.exit(1)
>
> if __name__ == '__main__':
>     main()
> ```
# Resources
- [https://github.com/snarktank/ralph/tree/main](https://github.com/snarktank/ralph/tree/main)
