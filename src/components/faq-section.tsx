import {generateFAQs} from '@/ai/flows/generate-faqs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQ {
  question: string;
  answer: string;
}

function parseFAQs(faqString: string): FAQ[] {
  if (!faqString) return [];

  const faqs: FAQ[] = [];
  const pairs = faqString.trim().split(/\n\s*\n/);

  for (const pair of pairs) {
    const questionMarkIndex = pair.indexOf('?');
    if (questionMarkIndex !== -1) {
      const question = pair.substring(0, questionMarkIndex + 1).trim();
      const answer = pair.substring(questionMarkIndex + 1).trim();
      if (question && answer) {
        faqs.push({question, answer});
      }
    }
  }

  return faqs;
}

export default async function FaqSection() {
  let faqs: FAQ[] = [];
  try {
    const response = await generateFAQs({});
    faqs = parseFAQs(response.faqs);
  } catch (error) {
    console.error('Failed to generate FAQs:', error);
    faqs = [
      {
        question: 'What services do you offer?',
        answer:
          'We offer AI agent development, workflow automation, data services, e-commerce store creation, and machine learning model development.',
      },
      {
        question: 'Who are your main competitors?',
        answer:
          'Our competitors range from large consulting firms to specialized AI startups. We differentiate ourselves with custom solutions and a client-centric approach.',
      },
      {
        question: 'What is the process for starting a project?',
        answer:
          'Our process begins with a consultation to understand your needs, followed by a proposal, development, and deployment. We ensure collaboration at every step.',
      },
    ];
  }

  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have questions? We have answers. If you can&apos;t find what
            you&apos;re looking for, feel free to contact us.
          </p>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
