import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto ">
      <Image
        src="/images/michael.jpg"
        width={300}
        height={300}
        alt="Michael Meliopoulos"
        priority={true}
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-10"
      />
    </section>
  );
}
