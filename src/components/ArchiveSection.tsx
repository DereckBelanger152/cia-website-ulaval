import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export interface ArchiveEntry {
  id: string;
  title: string;
  meta?: string;
  /* Internal route. Present means the row links; absent means it is a record. */
  to?: string;
}

interface Props {
  id?: string;
  titleKey: string;
  subtitleKey?: string;
  entries: ArchiveEntry[];
  className?: string;
}

const ROW =
  'grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1.5 py-5 sm:grid-cols-[auto_1fr_auto] sm:gap-x-8';

function Row({ entry, index }: { entry: ArchiveEntry; index: number }) {
  const body = (
    <>
      <span className="cia-mono text-2xl font-bold leading-none text-primary-500 sm:text-3xl">
        {String(index + 1).padStart(2, '0')}
      </span>

      <span className="flex min-w-0 items-center gap-1.5 font-heading text-xl font-bold leading-tight text-ink transition-colors group-hover:text-accent-500 sm:text-2xl">
        {entry.title}
        {entry.to && (
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-primary-500 transition-colors group-hover:text-accent-400"
            aria-hidden="true"
          />
        )}
      </span>

      {entry.meta && (
        <span className="cia-meta col-start-2 sm:col-start-3 sm:justify-self-end sm:text-right">
          {entry.meta}
        </span>
      )}
    </>
  );

  /* `group` only on linked rows, so a plain record gets no hover feedback. */
  return entry.to ? (
    <Link to={entry.to} className={`group ${ROW} cia-focus-ring`}>
      {body}
    </Link>
  ) : (
    <div className={ROW}>{body}</div>
  );
}

/**
 * The one archive treatment. Completed projects and past executives are the
 * same shape of content — a closed record, ranked, with a line of context —
 * and they had drifted into two different layouts.
 */
export default function ArchiveSection({
  id,
  titleKey,
  subtitleKey,
  entries,
  className = '',
}: Props) {
  const { t } = useTranslation();

  return (
    <section id={id} className={className}>
      <div className="cia-panel-soft">
        <header className="pb-8 md:pb-10">
          <p className="cia-meta-accent mb-2.5">{t('common.archive')}</p>
          <h2 className="cia-heading-section text-ink">{t(titleKey)}</h2>
          {subtitleKey && (
            <p className="cia-measure-read mt-3 font-body leading-relaxed text-ink-muted">
              {t(subtitleKey)}
            </p>
          )}
        </header>

        <ol>
          {entries.map((entry, i) => (
            <li key={entry.id} className={i > 0 ? 'cia-rule' : ''}>
              <Row entry={entry} index={i} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
