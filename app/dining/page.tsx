import EditorialLanding from '@/components/EditorialLanding';

export default function DiningPage() {
  return (
    <EditorialLanding
      label="Dining at Aurum Amalfi"
      title="The coast, served slowly."
      description="Seasonal Italian cooking, local ingredients, and memorable tables overlooking the Mediterranean."
      image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=85"
      imageAlt="An intimate candlelit restaurant table"
      highlights={[
        {
          title: 'The cliff table',
          description: 'A candlelit tasting menu shaped by the day’s catch and produce from nearby farms.',
        },
        {
          title: 'Breakfast, at your pace',
          description: 'Fresh pastries, seasonal fruit, and Italian coffee delivered wherever you would like to begin the day.',
        },
        {
          title: 'Private dining',
          description: 'A personal chef and a setting of your choice, from your suite terrace to a quiet garden corner.',
        },
      ]}
    />
  );
}
