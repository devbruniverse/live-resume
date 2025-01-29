import type { IJobPositionCardProps } from '~/utils/interfaces';

const JobPositionCard = ({ jobPosition, setFilter }: IJobPositionCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold">{jobPosition.title}</h3>
          <h4 className="text-xl">{jobPosition.company}</h4>
          <h5 className="text-lg">
            {jobPosition.startDate} - {jobPosition.endDate}
          </h5>
        </div>
        <div className="flex flex-col">
          <h4 className="text-xl">{jobPosition.location}</h4>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-lg">{jobPosition.description}</p>
      </div>
      <div className="flex flex-row max-w-full gap-1 flex-wrap">
        {jobPosition.skills.map((skill: string) => (
          <button
            className="flex shrink-0 border border-gray-100 h-7 px-3 cursor-pointer text-center rounded-full"
            key={`${jobPosition.title}-${skill}`}
            onClick={() => setFilter(skill)}
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export { JobPositionCard };
