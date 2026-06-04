---
title: "Hermes AI"
created: 2026-05-25T09:29:35.754-05:00
modified: 2026-05-25T09:30:39.655-05:00
parent: "[[AI Agents／Assistants]]"
children: []
---
###### Hermes AI
````excerpt
- not a coding copilot tethered to an IDE or a chatbot wrapper around a single API
- an autonomous agent that lives on your server, remembers what it learns, and gets more capable the longer it runs
````
^excerpt

# Install Output

> [!expand-ui]- terminal output
> ```
> ◆ Messaging Platforms
>   Connect to messaging platforms to chat with Hermes from anywhere.
>   Toggle with Space, confirm with Enter.
>
>   No platforms selected. Run 'hermes setup gateway' later to configure.
>
> ✓ Setup complete! You're ready to go.
>
>     Configure all settings:    hermes setup
>
> ◆ Tool Availability Summary
>   7/10 tool categories available:
>
>    ✓ Vision (image analysis)
>    ✗ Mixture of Agents (missing OPENROUTER_API_KEY)
>    ✗ Web Search & Extract (missing EXA_API_KEY, PARALLEL_API_KEY, FIRECRAWL_API_KEY/FIRECRAWL_API_URL, TAVILY_API_KEY, or SEARXNG_URL)
>    ✓ Browser Automation (Local browser)
>    ✓ Image Generation (OpenAI (Codex auth))
>    ✓ Text-to-Speech (Edge TTS)
>    ✗ Skills Hub (GitHub) (missing GITHUB_TOKEN)
>    ✓ Terminal/Commands
>    ✓ Task Planning (todo)
>    ✓ Skills (view, create, edit)
>
> ⚠ Some tools are disabled. Run 'hermes setup tools' to configure them,
> ⚠ or edit ~/.hermes/.env directly to add the missing API keys.
>
> ┌─────────────────────────────────────────────────────────┐
> │              ✓ Setup Complete!                          │
> └─────────────────────────────────────────────────────────┘
>
> 📁 All your files are in ~/.hermes/:
>
>    Settings:  /root/.hermes/config.yaml
>    API Keys:  /root/.hermes/.env
>    Data:      /root/.hermes/cron/, sessions/, logs/
>
> ────────────────────────────────────────────────────────────
>
> 📝 To edit your configuration:
>
>    hermes setup          Re-run the full wizard
>    hermes setup model    Change model/provider
>    hermes setup terminal Change terminal backend
>    hermes setup gateway  Configure messaging
>    hermes setup tools    Configure tool providers
>
>    hermes config         View current settings
>    hermes config edit    Open config in your editor
>    hermes config set <key> <value>
>                           Set a specific value
>
>    Or edit the files directly:
>    nano /root/.hermes/config.yaml
>    nano /root/.hermes/.env
>
> ────────────────────────────────────────────────────────────
>
> 🚀 Ready to go!
>
>    hermes              Start chatting
>    hermes gateway      Start messaging gateway
>    hermes doctor       Check for issues
>
> ┌─────────────────────────────────────────────────────────┐
> │              ✓ Installation Complete!                   │
> └─────────────────────────────────────────────────────────┘
>
> 📁 Your files:
>
>    Config:    /root/.hermes/config.yaml
>    API Keys:  /root/.hermes/.env
>    Data:      /root/.hermes/cron/, sessions/, logs/
>    Code:      /usr/local/lib/hermes-agent
>
> ─────────────────────────────────────────────────────────
>
> 🚀 Commands:
>
>    hermes              Start chatting
>    hermes setup        Configure API keys & settings
>    hermes config       View/edit configuration
>    hermes config edit  Open config in editor
>    hermes gateway install Install gateway service (messaging + cron)
>    hermes update       Update to latest version
>
> ─────────────────────────────────────────────────────────
>
> ⚡ 'hermes' was linked into /usr/local/bin and is ready to use — no shell reload needed.
> ```
