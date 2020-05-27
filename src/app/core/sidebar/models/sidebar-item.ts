import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export class SidebarItem {
  icon: IconDefinition;
  tooltip: string;
  routerLink: string;
  routerLinkActive: string[];
  routerLinkActiveOptions: { exact: boolean};
}
