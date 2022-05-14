import MarketingLinkCard from "./MarketingLinkCard";
import data from "./data";

export type MarketingLink = {
  title: string;
  url: string;
  id: number;
};

const MarketingLinksGrid: React.FC<MarketingLink> = () => {
  const marketingLink = data.map(
    (link: JSX.IntrinsicAttributes & { title: any; url: any; id: any }) => (
      <MarketingLinkCard key={link.id} {...link} />
    )
  );
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {marketingLink}
      </div>
    </div>
  );
};

export default MarketingLinksGrid;
