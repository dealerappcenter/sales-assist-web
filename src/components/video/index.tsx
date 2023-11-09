import { Section } from '@components/section';

export default function Video() {
  return (
    <section className='section bg-white-normal'>
      <Section>
        <div className="aspect-video w-full max-w-screen-xl">
          <iframe
            src="https://www.youtube.com/embed/0nX_XCLDhsE?list=PLOIszb58G-I9QtzrZzt0miUjuihqPeCIS&rel=0&hd=1"
            width="100%"
            height="100%"
            title="SalesAssist Get Docs Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              border: 'none'
            }}
          />
        </div>
      </Section>
    </section>
  );
}
