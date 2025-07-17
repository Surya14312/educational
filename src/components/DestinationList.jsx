import DestinationCard from "./DestinationCard";

const data = [
  { title: "Study in UK", path: "/uk" },
  { title: "Study in Europe", path: "/europe" },
  { title: "Study in Japan", path: "/japan" },
  { title: "Study in Singapore", path: "/singapore" },
  { title: "Study in Italy", path: "/italy" },
  { title: "MBBS Abroad", path: "/mbbs" },
  { title: "OurServices", path: "/ourservices" },
  { title: "About", path: "/about" },
  
];

export default function DestinationList() {
  return (
    <div className="grid">
      {data.map((item) => (
        <DestinationCard key={item.title} title={item.title} path={item.path} />
      ))}
    </div>
  );
}
