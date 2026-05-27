
import HeroSection from '@/components/home/Hero';
import StorySection from '@/components/home/StorySection';
import QuoteSection from '@/components/home/Quotes';
import TicketsSection from '@/components/home/Tickets';

export default function Home() {
  return (
    <div className="min-h-screen bg-deep">
      <main>
        <HeroSection />
        <StorySection />
        <QuoteSection />
        <TicketsSection />
      </main>
    </div>
  );
}