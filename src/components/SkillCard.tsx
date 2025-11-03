import { FC, ElementType } from "react"

type SkillCardProps = {
  name: string
  icon: ElementType // React component (like from lucide-react)
}

const SkillCard: FC<SkillCardProps> = ({ name, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
      <Icon className="w-12 h-12 mb-2 text-gray-600 dark:text-gray-300" />
      <p>{name}</p>
    </div>
  )
}

export default SkillCard
