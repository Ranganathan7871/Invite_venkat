import { MapPin, Calendar, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EventDetails = () => {
  const handleMapClick = () => {
    window.open('https://maps.google.com/maps/dir/?api=1&destination=Anugraha+Party+Hall,+Kovaipudhur', '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-elegant">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <Heart className="w-8 h-8 text-primary mx-auto mb-4 animate-float" />
          <h2 className="text-4xl sm:text-5xl font-heading font-semibold text-foreground mb-6">
            Our Wedding
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join us as we begin our journey together as one. Your presence would make our special day even more meaningful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Date & Time */}
          <div className="bg-card/80 backdrop-blur-sm shadow-romantic rounded-3xl p-8 border border-border/50 animate-fade-in-up">
            <div className="flex items-center mb-4">
              <Calendar className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-heading font-semibold text-foreground">Date & Time</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-heading text-primary font-semibold">November 15, 2025</p>
              <div className="flex items-center text-muted-foreground">
                <Clock className="w-4 h-4 mr-2" />
                <span>6:00 PM onwards</span>
              </div>
            </div>
          </div>

          {/* Venue */}
          <div className="bg-card/80 backdrop-blur-sm shadow-romantic rounded-3xl p-8 border border-border/50 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-heading font-semibold text-foreground">Venue</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold text-foreground">Anugraha Party Hall</p>
                <p className="text-muted-foreground">
                  Kovaipudhur
                </p>
              </div>
              <Button 
                onClick={handleMapClick}
                variant="outline"
                className="w-full bg-primary/10 border-primary/20 hover:bg-primary/20 text-primary"
              >
                <MapPin className="w-4 h-4 mr-2" />
                View on Map
              </Button>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="bg-gradient-romantic text-center rounded-3xl p-8 sm:p-12 shadow-elegant animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-romantic-foreground mb-6">
            A Message from Our Hearts
          </h3>
          <p className="text-lg text-romantic-foreground/80 leading-relaxed max-w-3xl mx-auto">
            "Love is not just looking at each other, it's looking in the same direction together. 
            We are excited to take this beautiful journey with the blessings and love of our dear family and friends. 
            Your presence at our wedding will add joy and create memories that we will cherish forever."
          </p>
          <div className="mt-6 text-romantic-foreground font-medium">
            - Venkat & Haripriya
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;