import {Github, Linkedin, Mail} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} NeuraForge. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/tahaftm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/taha-tariq-41aab8361"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="mailto:tahatariqf@gmail.com" aria-label="Email">
            <Mail className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
