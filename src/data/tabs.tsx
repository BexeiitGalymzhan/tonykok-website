export type tabProp = {
  id: TabKey;
  label: string;
};

export type TabKey = "mission" | "values" | "history";

export const tabs: tabProp[] = [
  { id: "mission", label: "Our Mission" },
  { id: "values", label: "Our Values" },
  { id: "history", label: "Our History" },
];

export const tabContent: Record<TabKey, React.ReactNode> = {
  mission: (
    <div>
      <h3 className="text-xl font-bold">Our Mission</h3>
      <p>
        Our mission is to deliver durable, innovative, and cost-effective
        construction solutions that stand the test of time. We aim to exceed
        client expectations by combining skilled craftsmanship, modern
        technologies, and a commitment to quality in every project we undertake.
      </p>
    </div>
  ),
  values: (
    <div>
      <h3 className="text-xl font-bold">Our Values</h3>
      <p>
        We build more than structures — we build trust. Our core values are
        integrity, reliability, and excellence. We prioritize safety, respect
        deadlines, and ensure transparency with our clients at every stage.
        Sustainability and responsibility guide our decisions, so that every
        project benefits both people and the environment.
      </p>
    </div>
  ),
  history: (
    <div>
      <h3 className="text-xl font-bold">Our History</h3>
      <p>
        Founded in 2000, LLP “Tonykok” started as a small team of dedicated
        builders and has grown into a trusted construction partner in
        Kazakhstan. Over the years, we have completed hundreds of projects, from
        residential complexes to industrial facilities, earning a reputation for
        reliability and quality workmanship.
      </p>
    </div>
  ),
};
