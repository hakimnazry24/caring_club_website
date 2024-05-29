import Image from "next/image";
import Link from "next/link";
import { FaDonate } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <div className="m-20 md:lg:grid grid-cols-2 gap-10 justify-center items-center">
            <div>
              <h1 className="text-5xl font-semibold mb-5 text-primary">
                Empowering Orphans, Enriching Lives
              </h1>
              <p className="text-slate-700 text-sm leading-6">
                Caring Club is one of the fourteen clubs under the Center for
                University Social Responsibility which focusing on the matters
                related to orphans. The Orphan Welfare Club is a dedicated
                organization that aims to improve the lives of orphaned children
                by providing them with essential support, care, and
                opportunities for growth. Our mission is to create a nurturing
                environment where these children can thrive, develop their
                potential, and build a brighter future for themselves.
              </p>
              <div className="flex gap-5 mt-10">
                <button className="btn btn-accent">
                  Get In Contact <FaPhoneVolume />
                </button>
                <button className="btn btn-primary">
                  Donate <FaDonate />
                </button>
              </div>
            </div>
            <div>
              <Image
                src={"/orphan.webp"}
                width={500}
                height={200}
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </section>
        <section>
          
        </section>
      </main>
    </>
  );
}
