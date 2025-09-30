import Tag from "../components/atoms/Tag/Tag";

const TagsDemo = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Tag variant="primary" color="brand">
          Brand
        </Tag>
        <Tag variant="primary" color="danger">
          Danger
        </Tag>
        <Tag variant="primary" color="positive">
          Positive
        </Tag>
        <Tag variant="primary" color="warning">
          Warning
        </Tag>
        <Tag variant="primary" color="neutral">
          Neutral
        </Tag>
      </div>
      <div className="flex gap-4">
        <Tag variant="secondary" color="brand">
          Brand
        </Tag>
        <Tag variant="secondary" color="danger">
          Danger
        </Tag>
        <Tag variant="secondary" color="positive">
          Positive
        </Tag>
        <Tag variant="secondary" color="warning">
          Warning
        </Tag>
        <Tag variant="secondary" color="neutral">
          Neutral
        </Tag>
      </div>
      <div className="flex gap-4">
        <Tag variant="secondary" state="inactive" color="brand">
          Brand
        </Tag>
        <Tag variant="secondary" state="inactive" color="danger">
          Danger
        </Tag>
        <Tag variant="secondary" state="inactive" color="positive">
          Positive
        </Tag>
        <Tag variant="secondary" state="inactive" color="warning">
          Warning
        </Tag>
        <Tag variant="secondary" state="inactive" color="neutral">
          Neutral
        </Tag>
      </div>
    </div>
  );
};

export default TagsDemo;
