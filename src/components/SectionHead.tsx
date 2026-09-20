const SectionHead = ({ number, label }: { number: string; label: string }) => (
  <div className="section-head">
    <span>{number}</span>
    <span className="rule" />
    <b>{label}</b>
  </div>
);

export default SectionHead;
