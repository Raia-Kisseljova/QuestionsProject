type CardProps = {
  title: string;
  image: string;
};
export const Card = (props: CardProps) => {
  const { title, image } = props;
  return (
    <div className="bg-blue-100 w-11/12 p-6 my-2 rounded-xl">
      <div className="bg-white flex rounded-lg items-center ">
        <img className="object-cover h-24 w-24 rounded-l-lg" src={image} />
        <p className="ml-8 text-md font-bold text-blue-500 ">{title}</p>
      </div>
    </div>
  );
};
