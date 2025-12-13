import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {ArrowRight} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'AI Agent Development',
    description: 'Automate tasks and improve customer engagement with intelligent AI agents.',
    fullDescription:
      'AI agents are transforming the way ecommerce businesses operate by automating repetitive tasks, improving customer engagement, and simplifying daily management. With intelligent workflows and end-to-end automation, business owners no longer need to manually handle order updates, customer queries, inventory checks, or marketing activities—AI agents manage everything in the background with accuracy and speed. At NeuraForge, we build powerful automation agents tailored for ecommerce, including smart chatbots, social media marketing bots, voice-based assistants, and data-driven business management systems. These agents save countless hours, reduce workload, and help businesses scale effortlessly while maintaining exceptional customer experience.',
  },
  {
    title: 'Workflow Automation',
    description:
      'Eliminate repetitive tasks and streamline your operations with smart, hands-free systems.',
    fullDescription:
      'AI workflow automation is becoming a game-changer for modern businesses by eliminating boring, repetitive tasks and replacing them with intelligent, hands-free systems. Instead of spending hours replying to emails, updating spreadsheets, tracking orders, or managing routine communication, automated workflows handle everything instantly and accurately. At NeuraForge, we help businesses streamline operations with smart automation pipelines—whether it’s an auto-responder that replies to customer emails within seconds, a system that organizes incoming orders, or a workflow that updates inventory and sales records automatically. By automating these everyday tasks, businesses can save time, reduce errors, improve customer satisfaction, and focus more on growth instead of manual work. AI-powered automation makes managing a business easier, faster, and far more efficient.',
  },
  {
    title: 'Machine Learning Models',
    description: 'Leverage custom ML models to predict behavior, detect fraud, and optimize operations.',
    fullDescription:
      'At NeuraForge, we develop custom ML solutions that help ecommerce and service-based businesses operate more intelligently—whether it’s predicting customer behavior, detecting fraud, recommending products, classifying files, or analyzing large datasets behind the scenes. These models continuously learn from your business data, improving accuracy over time and delivering insights that can boost sales, reduce costs, and optimize operations. By integrating ML into your workflows, you can move from manual guesswork to intelligent automation that drives real growth and efficiency.',
  },
  {
    title: 'Data Cleaning and Visualization',
    description: 'Turn raw, messy data into clean, actionable insights with powerful Python scripts.',
    fullDescription:
      'File cleaning is one of the most important steps in turning raw information into meaningful business insights, and Python makes this process incredibly efficient. At NeuraForge, we take messy, unstructured files—Excel sheets, CSVs, PDFs, logs, or data exports—and clean them automatically using powerful Python scripts. We remove duplicates, fix missing values, standardize formats, organize fields, and transform the data into a polished, usable structure. Once the data is cleaned, we generate clear visualizations and insights so business owners can instantly understand trends, performance, and opportunities. From sales charts to customer behavior patterns, our Python-powered data cleaning and visualization services help businesses make smarter decisions with clean, accurate, and easy-to-read data.',
  },
  {
    title: 'WordPress and Shopify Ecommerce Store',
    description: 'Create professional, high-performance online stores that are built to convert and scale.',
    fullDescription:
      'At NeuraForge, we help entrepreneurs create professional, high-performance stores that look great, load fast, and convert visitors into customers. Whether you need a custom WordPress store with powerful plugins or a fully optimized Shopify shop with automation, tracking, and integrations, we handle everything end-to-end. From product setup and theme customization to payment gateways and backend workflows, we ensure your store is easy to manage and ready to scale. Our goal is to give business owners an online presence that is clean, modern, and built to grow.',
  },
  {
    title: 'Custom Service',
    description: 'Have a unique requirement? Contact us for a custom solution tailored to your needs.',
    fullDescription: 'Have a unique requirement? Contact us for a custom solution tailored to your needs. We can discuss your project and provide a personalized quote.'
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
          Our Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore our range of AI-powered solutions designed to elevate your business.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map(service => (
          <Card
            key={service.title}
            className="flex flex-col border-2 border-primary bg-card"
          >
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="https://tahaaa13.app.n8n.cloud/form/b36354fb-bc66-43e2-8175-70579c91db2b" target="_blank">
                  Book a Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Button asChild size="lg">
          <Link href="/about">
            Explore what each service covers
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
