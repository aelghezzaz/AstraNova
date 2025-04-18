// Mock data service for news articles
// In a real application, this would fetch data from an API

export type Article = {
  id: string
  title: string
  description: string
  content: string
  category: string
  publishedAt: string
  readTime: number
  imageUrl: string
  aiInsight: string
  source: {
    name: string
    logo?: string
  }
}

const mockArticles: Article[] = [
  {
    id: "1",
    title: "Breakthrough in Quantum Computing: New Error Correction Method",
    description:
      "Researchers have achieved a significant breakthrough in quantum error correction, potentially accelerating the timeline for practical quantum computers.",
    content: `<p>In a groundbreaking development, researchers at MIT and Google have announced a new approach to quantum error correction that could significantly accelerate the timeline for practical quantum computing.</p>
    
    <p>The new method, which combines machine learning techniques with traditional quantum error correction codes, has demonstrated a 45% improvement in error rates compared to previous approaches. This advancement addresses one of the primary obstacles to building practical quantum computers: maintaining quantum coherence in the face of environmental noise.</p>
    
    <p>"This is a significant step forward," said Dr. Sarah Chen, lead researcher on the project. "Error correction has been one of the biggest challenges in quantum computing, and this new approach could reduce the timeline for practical quantum computers by several years."</p>
    
    <p>Industry experts suggest that this breakthrough could have far-reaching implications for fields that rely on complex simulations, including drug discovery, materials science, and cryptography. Several major tech companies have already announced plans to incorporate these findings into their quantum computing roadmaps.</p>
    
    <p>The research team has open-sourced their approach, making it available to the broader scientific community. This collaborative approach could further accelerate progress in the field, as researchers around the world build upon this foundation.</p>`,
    category: "Quantum Computing",
    publishedAt: "2023-06-15T10:30:00Z",
    readTime: 5,
    imageUrl: "/images/quantum-computer.png",
    aiInsight: "Could accelerate practical quantum computing by 2-3 years",
    source: {
      name: "MIT Technology Review",
      logo: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: "2",
    title: "AI Models Are Getting Too Big to Train: What's Next?",
    description:
      "As AI models grow exponentially in size, researchers are exploring new techniques to make training more efficient and accessible.",
    content: `<p>The race to build ever-larger AI models has hit a significant roadblock: they're becoming too computationally expensive to train. With models like GPT-4 reportedly using thousands of GPUs and costing millions of dollars to train, researchers are now focusing on making AI more efficient rather than simply bigger.</p>
    
    <p>"We've reached a point where simply scaling up is no longer sustainable," explains Dr. James Liu, AI researcher at Stanford. "The future of AI isn't necessarily about building bigger models, but smarter ones."</p>
    
    <p>Several promising approaches are emerging to address this challenge:</p>
    
    <ul>
      <li>Sparse models that activate only relevant parts of the network for specific tasks</li>
      <li>Distillation techniques that compress the knowledge from large models into smaller ones</li>
      <li>Modular architectures that can be combined for complex tasks but trained separately</li>
      <li>Hardware-aware neural architecture search that optimizes models for specific chips</li>
    </ul>
    
    <p>These approaches could democratize AI development, making it accessible to organizations without massive computing resources. They could also reduce the environmental impact of AI training, which has come under scrutiny for its carbon footprint.</p>
    
    <p>"The next breakthrough in AI might not come from the company with the most GPUs," notes Dr. Liu, "but from the team with the most innovative approach to efficiency."</p>`,
    category: "AI & ML",
    publishedAt: "2023-06-10T14:45:00Z",
    readTime: 7,
    imageUrl: "/images/ai-chip.png",
    aiInsight: "Trend toward efficient AI could democratize access to advanced models",
    source: {
      name: "Wired",
      logo: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: "3",
    title: "The Rise of Decentralized Finance: Beyond Cryptocurrencies",
    description:
      "DeFi applications are expanding beyond simple token exchanges, potentially disrupting traditional financial systems.",
    content: `<p>Decentralized Finance (DeFi) is rapidly evolving beyond its cryptocurrency origins, with new applications that could fundamentally transform how financial services are delivered. From insurance to lending to derivatives, DeFi protocols are beginning to challenge traditional financial institutions across multiple domains.</p>
    
    <p>"We're seeing the emergence of a parallel financial system," says Emma Rodriguez, blockchain researcher at Ethereum Foundation. "One that operates without intermediaries and is accessible to anyone with an internet connection."</p>
    
    <p>Recent developments in the space include:</p>
    
    <ul>
      <li>Decentralized insurance protocols that automatically pay out claims based on verifiable events</li>
      <li>Cross-chain bridges that allow assets to move seamlessly between different blockchains</li>
      <li>Tokenization platforms that can represent real-world assets like real estate on the blockchain</li>
      <li>Decentralized identity solutions that give users control over their financial data</li>
    </ul>
    
    <p>While the sector faces challenges, including regulatory uncertainty and security concerns, proponents argue that DeFi could bring financial services to the billions of people worldwide who remain unbanked or underbanked.</p>
    
    <p>"The most exciting DeFi applications aren't about speculation," Rodriguez emphasizes. "They're about creating financial infrastructure that's open, transparent, and accessible to everyone."</p>`,
    category: "Blockchain",
    publishedAt: "2023-06-05T09:15:00Z",
    readTime: 6,
    imageUrl: "/images/blockchain.png",
    aiInsight: "DeFi could bring financial services to 1.7B unbanked people globally",
    source: {
      name: "CoinDesk",
      logo: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: "4",
    title: "Cybersecurity in the Age of Quantum Computing",
    description:
      "As quantum computers advance, experts warn about the need for quantum-resistant encryption methods to protect sensitive data.",
    content: `<p>The advancement of quantum computing poses a significant threat to current encryption standards, potentially rendering many cybersecurity measures obsolete. Experts are urging organizations to begin preparing for the "post-quantum" era now, before it's too late.</p>
    
    <p>"Many people don't realize that data encrypted today could be decrypted in the future when quantum computers become powerful enough," warns Dr. Robert Chen, cryptography expert at the Cybersecurity Institute. "This is what we call the 'harvest now, decrypt later' attack."</p>
    
    <p>The National Institute of Standards and Technology (NIST) is in the final stages of standardizing quantum-resistant cryptographic algorithms, with final standards expected within the next year. However, implementing these new standards across global digital infrastructure will be a massive undertaking.</p>
    
    <p>Organizations are advised to take several steps to prepare:</p>
    
    <ul>
      <li>Conduct a crypto-inventory to identify systems using vulnerable encryption</li>
      <li>Develop quantum risk assessment frameworks</li>
      <li>Implement crypto-agility to enable rapid algorithm updates</li>
      <li>Begin testing post-quantum algorithms in non-critical systems</li>
    </ul>
    
    <p>"The transition to quantum-resistant encryption will be one of the largest cryptographic migrations in history," notes Dr. Chen. "Organizations that start planning now will be in a much better position when quantum computers reach their full potential."</p>`,
    category: "Cybersecurity",
    publishedAt: "2023-05-28T11:20:00Z",
    readTime: 8,
    imageUrl: "/images/cybersecurity.png",
    aiInsight: "Organizations should begin quantum security planning within 2-3 years",
    source: {
      name: "Dark Reading",
      logo: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: "5",
    title: "The Next Generation of Mobile Processors",
    description:
      "New mobile chip architectures promise significant performance and efficiency gains for smartphones and tablets.",
    content: `<p>The next generation of mobile processors is set to deliver unprecedented performance and energy efficiency, potentially transforming the capabilities of smartphones and other mobile devices. These new chips incorporate several technological advances that could extend battery life while enabling more complex applications.</p>
    
    <p>"We're seeing a fundamental shift in mobile chip design," explains Dr. Lisa Wang, semiconductor analyst at TechInsights. "The focus is no longer just on raw performance, but on specialized processing units for AI, graphics, and security."</p>
    
    <p>Key innovations in the upcoming generation of mobile processors include:</p>
    
    <ul>
      <li>3nm manufacturing processes that pack more transistors into smaller spaces</li>
      <li>Heterogeneous computing architectures with specialized cores for different tasks</li>
      <li>Integrated AI accelerators capable of performing complex machine learning tasks on-device</li>
      <li>Advanced power management systems that can dynamically adjust performance based on workload</li>
    </ul>
    
    <p>These advancements could enable new mobile applications that were previously impractical due to performance or battery constraints, such as real-time language translation, advanced augmented reality, and sophisticated computational photography.</p>
    
    <p>"The line between mobile devices and traditional computers continues to blur," notes Dr. Wang. "With these new processors, your smartphone will essentially become a specialized AI supercomputer in your pocket."</p>`,
    category: "Hardware",
    publishedAt: "2023-05-20T08:45:00Z",
    readTime: 4,
    imageUrl: "/images/mobile-processor.png",
    aiInsight: "Next-gen chips could enable continuous AR experiences with 2x battery life",
    source: {
      name: "AnandTech",
      logo: "/placeholder.svg?height=32&width=32",
    },
  },
]

export async function getNews(): Promise<Article[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return mockArticles
}

export async function getArticleById(id: string): Promise<Article | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))
  return mockArticles.find((article) => article.id === id)
}
