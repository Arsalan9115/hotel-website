import EditorialLanding from '@/components/EditorialLanding';

export default function WellnessPage() {
  return (
    <EditorialLanding
      label="Wellness by the sea"
      title="Make room to exhale."
      description="Restore your rhythm with considered treatments, open-air movement, and time beside the water."
      image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
      imageAlt="A calm spa retreat surrounded by nature"
      highlights={[
        {
          title: 'Aurum spa rituals',
          description: 'Personalised massage and restorative treatments with natural, locally inspired ingredients.',
        },
        {
          title: 'Move with the morning',
          description: 'Private yoga and guided stretching on the terrace as the coastline wakes up.',
        },
        {
          title: 'Water, quiet, repeat',
          description: 'Take an unhurried swim in the infinity pool, then settle into a shaded cabana above the sea.',
        },
      ]}
    />
  );
}
