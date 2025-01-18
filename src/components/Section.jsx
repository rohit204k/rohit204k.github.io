import Card from './Card';

function Section({ id, title, cards, para }) {
  return (
    <section id={id}>
      <h1>{title}</h1>
      <div className="cards-wrapper">
        {cards.map((card, index) => (
          <Card
            key={index}
            header={card.header}
            subheader={card.subheader}
            location={card.location}
            duration={card.duration}
            description={card.description}
            gpa={card.gpa}
            coursework={card.coursework}
            para={para}
            link={card.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Section;
