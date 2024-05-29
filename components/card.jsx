import Link from "next/link";

export default function Card({title = "Program Title", imageLink = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg", blogpost = "https://www.google.com"}) {
  return (
    <Link href={blogpost}>
      <div className="card w-96 bg-base-100 shadow-xl image-full transition ease-in-out duration-150 hover:scale-105">
        <figure>
          <img
            src={imageLink}
            
          />
        </figure>
        <div className="card-body flex h-full items-center justify-center">
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    </Link>
  );
}
