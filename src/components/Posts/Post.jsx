export function Post({ title, description}) {
  return (
    <div>
      <h3 className="text-3xl">{title}</h3>
      <p className="text-gray-500">
        {description}
      </p>
    </div>
  )
}
