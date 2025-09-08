import HeroSection from '@/components/HeroSection';
import EventDetails from '@/components/EventDetails';
import PhotoGallery from '@/components/PhotoGallery';
import Schedule from '@/components/Schedule';
import RSVP from '@/components/RSVP';
import ParticleEffects from '@/components/ParticleEffects';

const Index = () => {
  return (
    <div className="scroll-smooth">
      <ParticleEffects />
      <HeroSection />
      <EventDetails />
      <PhotoGallery />
      <Schedule />
      <RSVP />
    </div>
  );
};

export default Index;
