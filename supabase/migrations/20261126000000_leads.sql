-- Leads de la landing de M3 Depósitos.
-- La landing inserta con la clave publicable (rol anon); nadie puede leer con esa clave.
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  interes text not null check (interes in ('invertir', 'operar')),
  nombre text not null check (char_length(nombre) between 2 and 120),
  email text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email) <= 200),
  telefono text check (char_length(telefono) <= 40),
  mensaje text check (char_length(mensaje) <= 2000),
  origen text check (char_length(origen) <= 40),
  user_agent text check (char_length(user_agent) <= 300)
);

alter table public.leads enable row level security;

revoke all on public.leads from anon, authenticated;
grant insert on public.leads to anon;

create policy "landing inserta leads"
  on public.leads for insert to anon
  with check (true);
