import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="mastodon" href={siteMetadata.mastodon} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} {siteMetadata.author}
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">☄️</div>
      </div>
    </footer>
  )
}
