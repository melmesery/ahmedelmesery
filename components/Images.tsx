import Image from "next/image";

const Images = ({ project }: any) => {
  const { bigImage, mediumImages, smallImages, name } = project;
  return (
    <section className="max-w-[90%] sm:max-w-[80%] mx-auto py-10">
         <div className="w-full grid grid-col-1 sm:grid-cols-2 gap-1 mb-1 items-center justify-between">
          {mediumImages?.map((img: string) => (
            <Image src={img} alt={name} width={650} height={340} />
          ))}
        </div>
        <div className="w-full grid grid-col-1 sm:grid-cols-3 gap-1 mb-1 items-center justify-between">
          {smallImages?.map((img: string) => (
            <Image src={img} alt={name} width={500} height={230} />
          ))}
        </div>
        <div>
          <Image src={bigImage} alt={name} width={1260} height={690} />
        </div>
     </section>
  );
};

export default Images;
