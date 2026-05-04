import { FC, ElementType } from "react"

type SkillCardProps = {
  name: string
  icon: ElementType
}

const SkillCard: FC<SkillCardProps> = ({ name, icon: Icon }) => {
  return (
    <div className="group flex flex-col items-center justify-center p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* Icon */}
      <Icon className="w-10 h-10 mb-3 text-gray-600 dark:text-gray-300 group-hover:text-indigo-500 transition" />

      {/* Name */}
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition">
        {name}
      </p>
    </div>
  )
}

export default SkillCard