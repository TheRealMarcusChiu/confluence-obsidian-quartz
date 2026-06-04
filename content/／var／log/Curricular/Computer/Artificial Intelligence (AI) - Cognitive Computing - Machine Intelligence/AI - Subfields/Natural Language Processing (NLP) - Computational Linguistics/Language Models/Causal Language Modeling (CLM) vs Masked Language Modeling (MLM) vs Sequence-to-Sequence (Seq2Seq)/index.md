---
title: "Causal Language Modeling (CLM) vs Masked Language Modeling (MLM) vs Sequence-to-Sequence (Seq2Seq)"
created: 2024-08-18T12:55:44.828-05:00
modified: 2024-08-18T13:38:05.009-05:00
parent: "[[Language Models]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Causal Language Modeling (CLM)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- is an autoregressive method where the model is trained to predict the next token in a sequence given the previous tokens\n- is used in models like GPT-2 and GPT-3\n- is well-suited for tasks such as text generation and summarization\n- however, CLM models have unidirectional context, meaning they only consider the past and not the future context when generating predictions."
    ],
    [
      {
        "content": "Masked Language Modeling (MLM)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- is a training method used in models like BERT, where some tokens in the input sequence are masked, and the model learns to predict the masked tokens based on the surrounding context\n- has the advantage of bidirectional context, allowing the model to consider both past and future tokens when making predictions\n- useful for tasks like text classification, sentiment analysis, and named entity recognition"
    ],
    [
      {
        "content": "Sequence-to-Sequence (Seq2Seq)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- consist of an [[Encoder-Decoder Model|encoder-decoder architecture]], where the encoder processes the input sequence and the decoder generates the output sequence\n- is commonly used in tasks like machine translation, summarization, and question-answering\n- seq2seq models can handle more complex tasks that involve input-output transformations, making them versatile for a wide range of NLP tasks"
    ]
  ]
}
```
# Resources
- [https://medium.com/@tom_21755/understanding-causal-llms-masked-llm-s-and-seq2seq-a-guide-to-language-model-training-d4457bbd07fa](https://medium.com/@tom_21755/understanding-causal-llms-masked-llm-s-and-seq2seq-a-guide-to-language-model-training-d4457bbd07fa)
