import type { Photo } from '@/models/Images';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  const ratio = photo.height / photo.width;
  const galHeight = Math.ceil(250 * ratio);
  const span = Math.ceil(galHeight / 10) + 1;

  return (
    <div className="w-[250px] justify-self-center" style={{ gridRow: `span ${span}` }}>
      <Link href={photo.url} target="_blank" className="grid-place-content-center">
        <div className="rounded-xl overflow-hidden group">
          <Image
            src={photo.src.large}
            alt={photo.alt}
            width={250}
            height={photo.height}
            className="group-hover:opacity-70"
            sizes="250px"
            placeholder="blur"
            blurDataURL={photo.blurredDataUrl}
          />
        </div>
      </Link>
    </div>
  );
}
