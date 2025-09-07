import HeroSection from '@/components/HeroSection';
import EventDetails from '@/components/EventDetails';
import PhotoGallery from '@/components/PhotoGallery';
import Schedule from '@/components/Schedule';
import RSVP from '@/components/RSVP';

const Index = () => {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <EventDetails />
      <PhotoGallery />
      <Schedule />
      <RSVP />
    </div>
  );
};

export default Index;
