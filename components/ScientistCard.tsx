import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  name: string;
  field: string;
  description: string;
  image: string;
};

export default function ScientistCard({
  slug,
  name,
  field,
  description,
  image,
}: Props) {
  return (
    <Link
      href={`/scientists/${slug}`}
      className="scientist-card-link"
    >
      <div className="scientist-card">
        <Image
          src={image}
          alt={name}
          width={400}
          height={300}
          className="scientist-image"
        />

        <div className="scientist-content">
          <h3>{name}</h3>

          <span>{field}</span>

          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}