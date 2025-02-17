import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const LLMS: {
  name: string;
  model_id: string;
  model_type: string;
  model_provider?: string;
  stream_available?: boolean;
  local_model?: boolean;
  config?: string;
}[] = [
  {
    name: "GPT-3.5 Turbo (OpenAI)",
    model_id: "gpt-3.5-turbo-dbase",
    model_type: "chat",
    model_provider: "OpenAI",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "GPT-3.5 Turbo 16K (OpenAI)",
    model_id: "gpt-3.5-turbo-16k-dbase",
    model_type: "chat",
    model_provider: "OpenAI",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "GPT-4 (OpenAI)",
    model_id: "gpt-4-dbase",
    model_type: "chat",
    model_provider: "OpenAI",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "GPT-4 0613 (OpenAI)",
    model_id: "gpt-4-0613-dbase",
    model_type: "chat",
    model_provider: "OpenAI",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "GPT-3.5 Turbo Instruct (OpenAI)",
    model_id: "gpt-3.5-turbo-instruct-dbase",
    model_type: "instruct",
    model_provider: "openai-instruct",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "Claude 1 (Anthropic)",
    model_id: "claude-1-dbase",
    model_type: "chat",
    model_provider: "Anthropic",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "Claude 2 (Anthropic)",
    model_id: "claude-2-dbase",
    model_type: "chat",
    model_provider: "Anthropic",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "Claude Instant (Anthropic)",
    model_id: "claude-instant-1-dbase",
    model_type: "chat",
    model_provider: "Anthropic",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "Google chat-bison-001",
    model_id: "google-bison-dbase",
    model_type: "chat",
    model_provider: "Google",
    stream_available: false,
    local_model: false,
    config: "{}",
  },
  {
    name: "Llama v2 7B (Fireworks)",
    model_id: "accounts/fireworks/models/llama-v2-7b-chat",
    model_type: "chat",
    model_provider: "Fireworks",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "Llama v2 13B (Fireworks)",
    model_id: "accounts/fireworks/models/llama-v2-13b-chat",
    model_type: "chat",
    model_provider: "Fireworks",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "Llama v2 70B (Fireworks)",
    model_id: "accounts/fireworks/models/llama-v2-70b-chat",
    model_type: "chat",
    model_provider: "Fireworks",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "Llama v2 7B Chat int8 (Fireworks)",
    model_id: "accounts/fireworks/models/llama-v2-7b-chat-w8a16",
    model_type: "chat",
    model_provider: "Fireworks",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "Llama v2 13B Chat int8 (Fireworks)",
    model_id: "accounts/fireworks/models/llama-v2-13b-chat-w8a16",
    model_type: "chat",
    model_provider: "Fireworks",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "Llama v2 13B Code Instruct (Fireworks)",
    model_id: "accounts/fireworks/models/llama-v2-13b-code-instruct",
    model_type: "instruct",
    model_provider: "Fireworks",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "Llama v2 34B Code Instruct int8 (Fireworks)",
    model_id: "accounts/fireworks/models/llama-v2-34b-code-instruct-w8a16",
    model_type: "instruct",
    model_provider: "Fireworks",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "Mistral 7B Instruct 4K (Fireworks)",
    model_id: "accounts/fireworks/models/mistral-7b-instruct-4k",
    model_type: "instruct",
    model_provider: "Fireworks",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "GPT-3.5 Turbo 1106 (OpenAI)",
    model_id: "gpt-3.5-turbo-1106-dbase",
    model_type: "chat",
    model_provider: "OpenAI",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "GPT-4 Turbo (OpenAI)",
    model_id: "gpt-4-1106-preview-dbase",
    model_type: "chat",
    model_provider: "OpenAI",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "GPT-4 Turbo with vision (OpenAI)",
    model_id: "gpt-4-vision-preview-dbase",
    model_type: "chat",
    model_provider: "OpenAI",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "Claude 2.1 (Anthropic)",
    model_id: "claude-2.1-dbase",
    model_type: "chat",
    model_provider: "Anthropic",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "Claude Instant 1.2 (Anthropic)",
    model_id: "claude-instant-1.2-dbase",
    model_type: "chat",
    model_provider: "Anthropic",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "Yi 34B 200k (Fireworks)",
    model_id: "accounts/fireworks/models/yi-34b-200k",
    model_type: "instruct",
    stream_available: true,
    model_provider: "Fireworks",
    local_model: false,
    config: "{}",
  },
  {
    model_id: "accounts/fireworks/models/yi-34b-200k-capybara",
    name: "Capybara 34B (Fireworks)",
    model_type: "chat",
    stream_available: true,
    model_provider: "Fireworks",
    local_model: false,
    config: "{}",
  },
  {
    model_id: "accounts/fireworks/models/zephyr-7b-beta",
    name: "Zephyr 7B Beta (Fireworks)",
    model_type: "instruct",
    stream_available: true,
    model_provider: "Fireworks",
    local_model: false,
    config: "{}",
  },
  {
    model_id: "accounts/fireworks/models/mixtral-8x7b-instruct",
    name: "Mixtral MoE 8x7B Instruct (Fireworks)",
    model_type: "instruct",
    stream_available: true,
    model_provider: "Fireworks",
    local_model: false,
    config: "{}",
  },
  {
    model_id: "gemini-pro",
    name: "Gemini Pro (Google)",
    model_type: "chat",
    stream_available: true,
    model_provider: "Google",
    local_model: false,
    config: "{}",
  },
  {
    model_id: "accounts/fireworks/models/qwen-72b-chat",
    name: "Qwen 72b chat (Fireworks)",
    model_type: "chat",
    stream_available: true,
    model_provider: "Fireworks",
    local_model: false,
    config: "{}",
  },
  {
    model_id: "gpt-3.5-turbo-0125-dbase",
    name: "GPT-3.5 Turbo 0125 (OpenAI)",
    model_type: "chat",
    stream_available: true,
    model_provider: "OpenAI",
    local_model: false,
    config: "{}",
  },
  {
    name: "Claude 3 Opus 20240229 (Anthropic)",
    model_id: "claude-3-opus-20240229-dbase",
    model_type: "chat",
    model_provider: "Anthropic",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "Claude 3 Sonnet 20240229 (Anthropic)",
    model_id: "claude-3-sonnet-20240229-dbase",
    model_type: "chat",
    model_provider: "Anthropic",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "LLaMA2-70b (Groq)",
    model_id: "llama2-70b-4096-dbase",
    model_type: "chat",
    model_provider: "Groq",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "Mixtral-8x7b (Groq)",
    model_id: "mixtral-8x7b-32768-dbase",
    model_type: "chat",
    model_provider: "Groq",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    name: "Gemma-7b-it (Groq)",
    model_id: "gemma-7b-it-dbase",
    model_type: "chat",
    model_provider: "Groq",
    stream_available: true,
    local_model: false,
    config: "{}",
  },
  {
    model_id: "claude-3-haiku-20240307-dbase",
    name: "Claude 3 Haiku 20240307 (Anthropic)",
    model_type: "chat",
    stream_available: true,
    model_provider: "Anthropic",
    local_model: false,
    config: "{}",
  },
  {
    model_id: "accounts/fireworks/models/llama-v3-70b-instruct-dbase",
    name: "Llama v3 70B Instruct (Fireworks)",
    model_type: "chat",
    stream_available: true,
    model_provider: "Fireworks",
    local_model: false,
  },
  {
    model_id: "llama3-8b-8192-dbase",
    name: "LLaMA3-8b (Groq)",
    model_type: "chat",
    stream_available: true,
    model_provider: "Groq",
  },
  {
    model_id: "llama3-70b-8192",
    name: "LLaMA3-70b (Groq)",
    model_type: "chat",
    stream_available: true,
    model_provider: "Groq",
  },
  {
    model_id: "gpt-4o-dbase",
    name: "GPT-4o (OpenAI)",
    model_type: "chat",
    stream_available: true,
    model_provider: "OpenAI",
    config: "{}",
  }
];

const EMBEDDING_MODELS: {
  name: string;
  model_id: string;
  model_type: string;
  model_provider?: string;
  stream_available?: boolean;
  local_model?: boolean;
  config?: string;
}[] = [
  {
    model_id: "dialoqbase_eb_text-embedding-ada-002",
    name: "text-embedding-ada-002",
    model_provider: "OpenAI",
    model_type: "embedding",
  },
  {
    model_id: "dialoqbase_eb_small",
    name: "Cohere",
    model_provider: "Cohere",
    model_type: "embedding",
  },
  {
    model_id: "dialoqbase_eb_Xenova/all-MiniLM-L6-v2",
    name: "all-MiniLM-L6-v2 (cpu)",
    model_type: "embedding",
    model_provider: "Transformer",
  },
  {
    model_id: "dialoqbase_eb_dialoqbase-ollama",
    name: "Ollama Embeddings",
    model_type: "embedding",
    model_provider: "Ollama",
  },
  {
    model_id: "dialoqbase_eb_models/embedding-gecko-001",
    name: "Google text-gecko-001",
    model_type: "embedding",
    model_provider: "Google PaLM",
  },
  {
    model_id: "dialoqbase_eb_jina-embeddings-v2-base-en",
    name: "jina-embeddings-v2-base-en (API)",
    model_type: "embedding",
    model_provider: "Jina",
  },
  {
    model_id: "dialoqbase_eb_Xenova/jina-embeddings-v2-small-en",
    name: "jina-embeddings-v2-small-en (cpu)",
    model_type: "embedding",
    model_provider: "Transformer",
  },
  {
    model_id: "dialoqbase_eb_embedding-001",
    name: "Google embedding-001",
    model_type: "embedding",
    model_provider: "Google",
  },
  {
    model_id: "dialoqbase_eb_text-embedding-3-small",
    name: "text-embedding-3-small (OpenAI)",
    model_type: "embedding",
    model_provider: "OpenAI",
  },
  {
    model_id: "dialoqbase_eb_text-embedding-3-large",
    name: "text-embedding-3-large (OpenAI)",
    model_type: "embedding",
    model_provider: "OpenAI",
  },
  {
    model_provider: "Fireworks",
    model_type: "embedding",
    model_id: "dialoqbase_eb_nomic-ai/nomic-embed-text-v1.5",
    name: "nomic-ai/nomic-embed-text-v1.5 (Fireworks)",
  },
];

const newModels = async () => {
  console.log("Seeding new models...");
  for (const model of LLMS) {
    await prisma.dialoqbaseModels.upsert({
      where: {
        model_id: model.model_id,
      },
      update: {
        name: model.name,
      },
      create: model,
    });
  }

  for (const model of EMBEDDING_MODELS) {
    await prisma.dialoqbaseModels.upsert({
      where: {
        model_id: model.model_id,
      },
      update: {
        name: model.name,
      },
      create: model,
    });
  }
};

const removeTensorflowSupport = async () => {
  await prisma.bot.updateMany({
    where: {
      embedding: "tensorflow",
    },
    data: {
      embedding: "transformer",
    },
  });
};

const replaceOldEmbeddings = async () => {
  await prisma.bot.updateMany({
    where: {
      embedding: "openai",
    },
    data: {
      embedding: "dialoqbase_eb_text-embedding-ada-002",
    },
  });

  await prisma.bot.updateMany({
    where: {
      embedding: "cohere",
    },
    data: {
      embedding: "dialoqbase_eb_small",
    },
  });

  await prisma.bot.updateMany({
    where: {
      embedding: "transformer",
    },
    data: {
      embedding: "dialoqbase_eb_Xenova/all-MiniLM-L6-v2",
    },
  });

  await prisma.bot.updateMany({
    where: {
      embedding: "google-gecko",
    },
    data: {
      embedding: "dialoqbase_eb_models/embedding-gecko-001",
    },
  });

  await prisma.bot.updateMany({
    where: {
      embedding: "jina-api",
    },
    data: {
      embedding: "dialoqbase_eb_jina-embeddings-v2-base-en",
    },
  });

  await prisma.bot.updateMany({
    where: {
      embedding: "jina",
    },
    data: {
      embedding: "dialoqbase_eb_Xenova/jina-embeddings-v2-small-en",
    },
  });

  await prisma.bot.updateMany({
    where: {
      embedding: "google",
    },
    data: {
      embedding: "dialoqbase_eb_embedding-001",
    },
  });
};

const updateGeminiStreamingToTrue = async () => {
  await prisma.dialoqbaseModels.update({
    where: {
      model_id: "gemini-pro",
    },
    data: {
      stream_available: true,
    },
  });
};

const main = async () => {
  await newModels();
  await removeTensorflowSupport();
  await replaceOldEmbeddings();
  await updateGeminiStreamingToTrue();
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
