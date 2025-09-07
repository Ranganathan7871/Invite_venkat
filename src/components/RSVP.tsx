import { useState } from 'react';
import { Heart, Users, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const RSVP = () => {
  const [likeCount, setLikeCount] = useState(127);
  const [hasLiked, setHasLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { toast } = useToast();

  const handleLike = () => {
    if (!hasLiked) {
      setLikeCount(prev => prev + 1);
      setHasLiked(true);
      setIsAnimating(true);
      
      toast({
        title: "Thank you! ❤️",
        description: "Your love and support means the world to us!",
        duration: 3000,
      });

      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const handleRSVP = () => {
    toast({
      title: "RSVP Feature Coming Soon! 💕",
      description: "We'll notify you when RSVP form is ready. For now, please contact us directly.",
      duration: 5000,
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-heading font-semibold text-foreground mb-6">
            Share the Love
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Your presence is the greatest gift. Let us know you'll be there to celebrate with us!
          </p>
        </div>

        {/* Like Button */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="bg-card/80 backdrop-blur-sm shadow-romantic rounded-3xl p-8 sm:p-12 border border-border/50 inline-block">
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                Send Your Love
              </h3>
              <p className="text-muted-foreground">
                Tap the heart to show your excitement for our big day!
              </p>
            </div>

            <Button
              onClick={handleLike}
              disabled={hasLiked}
              className={`relative group ${
                hasLiked 
                  ? 'bg-primary hover:bg-primary text-primary-foreground' 
                  : 'bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary border-primary/20'
              } transition-all duration-300 rounded-full px-8 py-6 text-lg font-semibold ${
                isAnimating ? 'animate-scale-in' : ''
              }`}
              variant={hasLiked ? "default" : "outline"}
            >
              <Heart 
                className={`w-6 h-6 mr-3 transition-all duration-300 ${
                  hasLiked ? 'fill-current text-primary-foreground' : 'group-hover:fill-current'
                }`} 
              />
              {hasLiked ? (
                <span className="flex items-center">
                  <Check className="w-5 h-5 mr-2" />
                  Loved!
                </span>
              ) : (
                'Send Love'
              )}
            </Button>

            {/* Like Count */}
            <div className="mt-6 flex items-center justify-center text-muted-foreground">
              <Users className="w-5 h-5 mr-2" />
              <span className="font-medium">
                {likeCount} people are excited about our wedding!
              </span>
            </div>
          </div>
        </div>

        {/* RSVP Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-gradient-celebration rounded-3xl p-8 sm:p-12 shadow-elegant">
            <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-celebration-foreground mb-4">
              Will You Join Us?
            </h3>
            <p className="text-celebration-foreground/80 mb-8 text-lg">
              Please let us know if you'll be able to celebrate with us on our special day.
            </p>
            
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Button
                onClick={handleRSVP}
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 shadow-romantic rounded-full px-8 py-3 font-semibold"
              >
                Yes, I'll Be There! 🎉
              </Button>
              <Button
                onClick={handleRSVP}
                variant="outline"
                size="lg"
                className="border-celebration-foreground/20 text-celebration-foreground hover:bg-celebration-foreground/10 rounded-full px-8 py-3 font-semibold"
              >
                Can't Make It 😢
              </Button>
            </div>

            <p className="text-sm text-celebration-foreground/60 mt-6">
              For questions or special arrangements, please contact us directly.
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
            <h4 className="font-heading font-semibold text-foreground mb-4">Get in Touch</h4>
            <div className="text-center text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Venkat</p>
                <p>+91 8015938411</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;