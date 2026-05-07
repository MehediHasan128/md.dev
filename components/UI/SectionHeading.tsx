interface ISectionHeading {
  subTitle: string;
  title: {
    firstPart: string;
    lastPart?: string;
  };
  description: string;
}

const SectionHeading = ({ subTitle, title, description }: ISectionHeading) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 md:gap-0">
      <div className="md:w-[60%]">
        <h1 className="text-3xl lg:text-5xl lg:leading-16">
          <span className="text-lg lg:text-base font-headingStyle">
            {subTitle}
          </span>{" "}
          <br />
          <span className="font-bold">
             {title.firstPart} <br />
            {title.lastPart}
          </span>
        </h1>
      </div>
      <div className="md:w-[40%] md:text-end">
        <p className="md:text-sm lg:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeading;
