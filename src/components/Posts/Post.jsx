
export function Post({ title, description}) {
  return (
    <div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-500">
        {description}
      </p>
    </div>
  )
}
