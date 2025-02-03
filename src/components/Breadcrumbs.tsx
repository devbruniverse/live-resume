import { Fragment } from 'react';
import { useRouterState } from '@tanstack/react-router';
import CustomLink from '@/components/basic/CustomLink';
import { IoHome } from 'react-icons/io5';

export default function Breadcrumbs() {
  const matches = useRouterState({ select: (s) => s.matches });

  if (matches?.[1]?.id == '/') {
    return null;
  }

  return (
    <div className="flex flex-row gap-2 items-center container px-4">
      {matches.map((item) => {
        if (item.id == '__root__') {
          return (
            <Fragment key={item.pathname}>
              <CustomLink href={item.pathname} label={''} icon={<IoHome />} />
              &gt;
            </Fragment>
          );
        } else {
          const paths = item.id.split('/').filter((item) => item !== '');
          let path = '';
          let isLastItem = false;

          return paths.map((subpath, index) => {
            path += index > 1 ? `/${subpath}` : `${subpath}`;
            isLastItem = index === paths.length - 1;

            if (isLastItem) {
              return <span key={item.id + path + index}>{subpath}</span>;
            }

            return (
              <Fragment key={item.id + path + index}>
                <CustomLink href={path} label={subpath} />
                <>&gt;</>
              </Fragment>
            );
          });
        }
      })}
    </div>
  );
}
