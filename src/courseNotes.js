/**
 * Original study notes for Domain 1 Review, Task Statement 1.1.
 * Written from the official Skill Builder teaching, but not a transcript
 * and not a close reconstruction of the course script.
 */

export const COURSE = {
  title: "Domain 1 Review",
  fullTitle: "Domain 1 Review: AWS Certified AI Practitioner (AIF-C01 - English)",
  url: "https://skillbuilder.aws/learn/G74NXHMDQB/domain-1-review-aws-certified-ai-practitioner--aifc01--english/GMVR9CDHYQ",
};

export const INTRODUCTION = {
  id: "intro",
  title: "Domain 1 Introduction",
  points: [
    "Domain 1 is organized as three task statements.",
    "Task Statement 1.1: Explain basic AI concepts and terminologies.",
    "Task Statement 1.2: Identify practical use cases for AI.",
    "Task Statement 1.3: Describe the ML development lifecycle.",
    "Task Statement 1.1, taught across five lessons, covers inferencing options, the data types used in training, and the main categories of learning algorithms, along with core terms such as AI, ML, and deep learning.",
  ],
};

export const TASK_1_1 = {
  id: "1.1",
  title: "Task Statement 1.1: Explain basic AI concepts and terminologies",
  summary: "Five lessons on basic terms, data, training and inferencing, learning styles, fit and fairness, and deep learning plus generative AI.",
  lessons: [
    {
      id: "1.1-L1",
      number: 1,
      title: "What AI is, and common examples",
      points: [
        "AI is the computer-science field that takes on cognitive problems usually associated with human intelligence, including learning, creation, and image recognition.",
        "The aim is self-learning systems that derive meaning from data.",
        "Typical uses include answering questions, creating content, fraud detection, repetitive work, and finding patterns in order to forecast what may happen next.",
        "High-level industry uses include help with medical images, planning for outbreaks or demand, factory quality and maintenance checks, personalized recommendations, and flagging unusual financial activity.",
        "ML is a branch of AI that uses data and algorithms so systems can learn and steadily improve accuracy. Models are trained on large datasets to find patterns and make predictions, for example a product recommendation while someone is shopping.",
        "Deep learning is a type of ML inspired by the brain, using layers of neural networks. It can be used for speech and for recognizing objects in images.",
        "A prediction from a model is called an inference: an educated guess that comes with a probability, not a certainty.",
        "An anomaly is a departure from a pattern the system expected.",
        "Computer vision works with images and video for object identification, facial recognition, classification, monitoring, and detection.",
        "Language translation can carry meaning into another language, rather than only swapping words one-for-one.",
        "Natural language processing (NLP) is how systems understand, interpret, and generate human language, for example voice assistants and booking chatbots.",
        "Generative AI can hold a conversation and create original content such as stories, images, videos, or music. Work usually begins with a prompt. The course used Amazon Bedrock as an example (named only; no logo).",
      ],
    },
    {
      id: "1.1-L2",
      number: 2,
      title: "ML, data types, training, and a simple line of best fit",
      points: [
        "ML is described as algorithms and statistical models that let computers handle complex tasks without being given explicit step-by-step instructions.",
        "An algorithm takes data as input and produces an output.",
        "Training uses known data made of features (for example, columns in a table, or pixels in an image). Internal parameters are adjusted until the output matches what is expected. The trained model can then run inference on new, unseen data.",
        "Structured data is stored as rows and columns and is the easiest to process. Examples include CSV files and relational databases such as Amazon RDS and Amazon Redshift, queried with SQL. For training, this data is typically exported to Amazon S3.",
        "Semi-structured data does not completely follow those row-and-column rules. Records can have different or missing attributes. JSON documents with key-value pairs are a common example. Amazon DynamoDB, plus Amazon DocumentDB (MongoDB compatible), are databases built for this kind of data; for training it is also exported to Amazon S3.",
        "Unstructured data has no specific data model and is not stored as a table: images, video, text files, or social media posts, usually kept as objects in Amazon S3. Features are obtained through processing such as tokenization (breaking writing into words or phrases).",
        "Time series data labels each record with a timestamp and stores records in order. It is used to predict future trends.",
        "Amazon S3 is taught as the primary source of training data because it can hold any type of data, tends to cost less, and offers virtually unlimited capacity.",
        "Linear regression example: find a best-fit line with y = mx + b. The parameters slope (m) and intercept (b) are adjusted to minimize errors (the distances from the points to the line). The trained line can then infer a new value.",
      ],
    },
    {
      id: "1.1-L3",
      number: 3,
      title: "Model artifacts, two hosting options, and learning styles",
      points: [
        "Training produces model artifacts: trained parameters, a model definition for computing inferences, and metadata. These are typically stored in Amazon S3 and packaged with inference code into a deployable model.",
        "This 1.1 lesson teaches two hosting options only. Real-time uses a persistent endpoint, with low latency and high throughput for a sustained stream of requests; compute stays running.",
        "Batch is for offline work when a large dataset is already available. There is no persistent endpoint. Resources run, finish the job, then shut down. This is often more cost-effective when it is acceptable to wait.",
        "Asynchronous and serverless inferencing are not taught in these captured 1.1 scripts.",
        "Supervised learning uses pre-labeled data: you specify the input and the desired output (course example: fish / not fish). Inferences are probabilities. Getting those labels is the main challenge. The course names Amazon SageMaker Ground Truth and Amazon Mechanical Turk as labeling help.",
        "Unsupervised learning uses features that are not labeled. It finds patterns, clusters, and groups. Useful for pattern recognition, anomaly detection, and grouping (for example, clustering network traffic, or a sensor reading far from the usual range).",
        "Reinforcement learning is autonomous decision making by an agent that takes actions in an environment toward a goal. It learns by trial and error, without labeled input. Actions that get closer to the goal are rewarded. The agent is sometimes allowed to explore actions that may not be rewarded.",
        "AWS DeepRacer is the course example: the race car plays the agent role, and the racetrack is its environment.",
        "Unsupervised and reinforcement learning both work without labeled data. Reinforcement learning has a predetermined end goal.",
      ],
    },
    {
      id: "1.1-L4",
      number: 4,
      title: "Overfitting, underfitting, bias, and fairness",
      points: [
        "Overfitting means the model does better on training data than on new data: it fits the training data too well. Training for too long can make it overemphasize noise. A common correction is more diverse training data.",
        "Underfitting means the model cannot find a meaningful relationship between input and output. Results are inaccurate on both the training data and new data. This may happen if training was too short or the dataset is too small.",
        "Practitioners look for a sweet spot in training time that avoids both problems.",
        "Bias is disparity in how a model performs across groups: results skewed for or against a class. This often comes from training data that lacks diversity.",
        "Model quality depends on data quality and quantity. Fairness constraints should be identified before a model is created. Inspect training data for potential bias, and keep evaluating results for fairness.",
      ],
    },
    {
      id: "1.1-L5",
      number: 5,
      title: "Deep learning, generative AI, and large language models",
      points: [
        "Deep learning uses neural networks inspired by the brain. Nodes simulate neurons, arranged as an input layer, hidden layers, and an output layer. Weights are assigned to features. Information flows forward. Weights are adjusted to minimize error.",
        "For computer vision, a key advantage is that the model can extract features itself — they do not have to be supplied. It may need very large image collections, and infrastructure cost is higher than a traditional approach. Cloud computing made this practical.",
        "Traditional ML is generally efficient for structured and labeled data, such as classification and recommendation (for example, predicting customer churn).",
        "Deep learning is more suitable for unstructured data such as images, videos, and text, including image classification and NLP.",
        "Both approaches use statistical algorithms. Neural networks that aim to simulate human intelligence appear only on the deep-learning side, not in the traditional approach.",
        "Generative AI uses deep learning models pre-trained on extremely large datasets of text, or sequences. Transformer neural networks turn an input sequence (a prompt) into an output sequence (the response).",
        "Transformers process the sequence in parallel, rather than one word at a time, which makes much larger datasets practical.",
        "LLMs contain many billions of features, are flexible, and outperform other ML approaches to NLP. They can summarize, generate human-like text, translate, and write stories and code.",
        "The course used Amazon Bedrock as an example when discussing these models. Agentic AI is not named in the Domain 1 introduction or in 1.1 Lessons 1–5.",
      ],
    },
  ],
};

export const TASK_OUTLINE = [
  TASK_1_1,
  {
    id: "1.2",
    title: "Task Statement 1.2: Identify practical use cases for AI",
    status: "pending",
    lessonRange: "Lessons 1–5",
    note: "Official scripts for this task statement have not been captured yet, so lesson notes are not expanded here.",
  },
  {
    id: "1.3",
    title: "Task Statement 1.3: Describe the ML development lifecycle",
    status: "pending",
    lessonRange: "Lessons 1–7",
    note: "Official scripts for this task statement have not been captured yet, so lesson notes are not expanded here.",
  },
];

/** Lesson ids to highlight on each practice board. */
export const BOARD_LESSONS = {
  hierarchy: ["1.1-L1", "1.1-L5"],
  "train-fit": ["1.1-L2", "1.1-L3", "1.1-L4"],
  inferencing: ["1.1-L3"],
  "data-learning": ["1.1-L2", "1.1-L3"],
};
