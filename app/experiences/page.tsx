import EditorialLanding from '@/components/EditorialLanding';

export default function ExperiencesPage() {
  return (
    <EditorialLanding
      label="Experiences, made yours"
      title="Follow the feeling."
      description="Discover the Amalfi Coast through private moments, thoughtful local guidance, and room to wander."
      image="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=85"
      imageAlt="A sunlit view across the Amalfi Coast"
      highlights={[
        {
          title: 'Out on the water',
          description: 'Set off by private boat to swim in quiet coves and see the coastline from a different angle.',
        },
        {
          title: 'Villages and viewpoints',
          description: 'Explore nearby coastal towns with a local guide, with stops chosen around your interests.',
        },
        {
          title: 'A day with no schedule',
          description: 'Tell our concierge what you feel like doing. We will take care of the thoughtful details.',
        },
      ]}
    />
  );
}
