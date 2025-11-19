import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const services = [
  {
    title: 'AI Agent Development',
    description:
      'AI agents are transforming the way ecommerce businesses operate by automating repetitive tasks, improving customer engagement, and simplifying daily management. With intelligent workflows and end-to-end automation, business owners no longer need to manually handle order updates, customer queries, inventory checks, or marketing activities—AI agents manage everything in the background with accuracy and speed. At NeuraForge, we build powerful automation agents tailored for ecommerce, including smart chatbots, social media marketing bots, voice-based assistants, and data-driven business management systems. These agents save countless hours, reduce workload, and help businesses scale effortlessly while maintaining exceptional customer experience.',
  },
  {
    title: 'Workflow Automation',
    description:
      'AI workflow automation is becoming a game-changer for modern businesses by eliminating boring, repetitive tasks and replacing them with intelligent, hands-free systems. Instead of spending hours replying to emails, updating spreadsheets, tracking orders, or managing routine communication, automated workflows handle everything instantly and accurately. At NeuraForge, we help businesses streamline operations with smart automation pipelines—whether it’s an auto-responder that replies to customer emails within seconds, a system that organizes incoming orders, or a workflow that updates inventory and sales records automatically. By automating these everyday tasks, businesses can save time, reduce errors, improve customer satisfaction, and focus more on growth instead of manual work. AI-powered automation makes managing a business easier, faster, and far more efficient.',
  },
  {
    title: 'Machine Learning Models',
    description:
      'At NeuraForge, we develop custom ML solutions that help ecommerce and service-based businesses operate more intelligently—whether it’s predicting customer behavior, detecting fraud, recommending products, classifying files, or analyzing large datasets behind the scenes. These models continuously learn from your business data, improving accuracy over time and delivering insights that can boost sales, reduce costs, and optimize operations. By integrating ML into your workflows, you can move from manual guesswork to intelligent automation that drives real growth and efficiency.',
  },
  {
    title: 'Data Cleaning and Visualization',
    description:
      'File cleaning is one of the most important steps in turning raw information into meaningful business insights, and Python makes this process incredibly efficient. At NeuraForge, we take messy, unstructured files—Excel sheets, CSVs, PDFs, logs, or data exports—and clean them automatically using powerful Python scripts. We remove duplicates, fix missing values, standardize formats, organize fields, and transform the data into a polished, usable structure. Once the data is cleaned, we generate clear visualizations and insights so business owners can instantly understand trends, performance, and opportunities. From sales charts to customer behavior patterns, our Python-powered data cleaning and visualization services help businesses make smarter decisions with clean, accurate, and easy-to-read data.',
  },
  {
    title: 'WordPress and Shopify Ecommerce Store',
    description:
      'At NeuraForge, we help entrepreneurs create professional, high-performance stores that look great, load fast, and convert visitors into customers. Whether you need a custom WordPress store with powerful plugins or a fully optimized Shopify shop with automation, tracking, and integrations, we handle everything end-to-end. From product setup and theme customization to payment gateways and backend workflows, we ensure your store is easy to manage and ready to scale. Our goal is to give business owners an online presence that is clean, modern, and built to grow.',
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <h1 className="mb-8 font-headline text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
        About NeuraForge
      </h1>
      <div className="space-y-6 text-lg text-muted-foreground">
        <p>
          NeuraForge is a forward-thinking startup dedicated to revolutionizing
          businesses through artificial intelligence and automation. We believe
          in the power of technology to solve complex problems and create new
          opportunities for growth.
        </p>
        <p>
          Our mission is to provide cutting-edge solutions that are accessible,
          efficient, and tailored to the unique needs of each client. From
          developing intelligent AI agents to crafting stunning e-commerce
          experiences, we are your partners in innovation.
        </p>
        <p>
          Our team is comprised of passionate developers, designers, and data
          scientists who are experts in their fields. We thrive on challenges
          and are committed to delivering excellence in every project we
          undertake.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-1">
          {services.map(service => (
            <Card
              key={service.title}
              className="border-2 border-primary/10 bg-card shadow-lg shadow-primary/5"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
