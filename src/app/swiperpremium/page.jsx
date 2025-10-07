import SlicerCarousel from "../components/SlicerCarousel";

const slidesData = [
  { image: '/images/Poster1.jpg', title: 'Confidence', text: 'Confidence is the best outfit. Wear it and own it!' },
  { image: '/images/Poster2.jpg', title: 'Glow', text: 'Glow differently. Shine unapologetically.' },
  { image: '/images/Poster3.jpg', title: 'Elegance', text: 'Elegance is an attitude.' },
  { image: '/images/Poster4.jpg', title: 'Fearless', text: 'Fearless. Limitless. Unstoppable.' },
  { image: '/images/Poster5.jpg', title: 'Vibe', text: 'Your vibe attracts your tribe.' },
  { image: '/images/Poster6.jpg', title: 'Style', text: 'Style is a way to say who you are without speaking.' },
  { image: '/images/Poster7.jpg', title: 'Be You', text: 'Be bold, be brilliant, be you.' },
];

export default function PremiumPage() {
  return (
    <main>
      <SlicerCarousel slides={slidesData} />
      {/* <ExpoSlider slides={slidesData} /> */}
    </main>
  );
}