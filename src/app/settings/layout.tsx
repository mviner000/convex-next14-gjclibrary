import { ReactNode } from 'react';
import SettingsBreadcrumb from "@/components/SettingsBreadcrumb";

interface SettingsLayoutProps {
  children: ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div>
      <SettingsBreadcrumb />
      {children}
    </div>
  );
}