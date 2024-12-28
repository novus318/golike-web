import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


  const faqs = [
    {
      question: "Who can use this platform?",
      answer: "Anyone looking to connect with the opposite gender based on clear intentions, like emotional bonding, relaxation, or physical relationships, can join."
    },
    {
      question: "Is the platform safe to use?",
      answer: "Yes! We prioritize safety with AI-driven gender verification and strict user guidelines to ensure a trustworthy experience."
    },
    {
      question: "How do I get started?",
      answer: "Sign up, verify your profile, buy tokens, and select your intention. The system will handle the rest, scheduling calls for you with matching users."
    },
    {
      question: "What happens if I don’t connect during a call?",
      answer: "If a call doesn’t result in a connection, you can continue with the remaining scheduled calls for the day. Each day brings fresh opportunities!"
    }
  ];
  
  

const FaqSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
    <h1 className="text-3xl font-bold mb-8">FAQ</h1>
    <Accordion type="single" collapsible className="w-full space-y-4">
      {faqs.map((faq, index) => (
        <AccordionItem 
          key={index} 
          value={`item-${index}`}
          className="border rounded-lg px-4"
        >
          <AccordionTrigger
           className="text-xl font-medium py-4">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground py-4">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
  )
}

export default FaqSection