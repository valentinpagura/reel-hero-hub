<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep movie presentation and filtering in a browser-safe catalogue module with the field names from the supplied templates, so a verified existing data source can replace preview records without changing UI contracts.
- Keep reservation navigation compatible with `/comprar?pelicula=<id>&titulo=<name>` from the supplied app; do not simulate available screenings or successful reservations without a connected source.
- Define cinema visual roles in the global CSS and use the shared Button variants, so all screens retain a consistent theme.
