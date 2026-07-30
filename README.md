# BarberGo

MVP visual e navegável de um marketplace mobile de barbearias próximas. Esta etapa usa somente dados mockados e valida o fluxo principal:

**Home → Barbearia → Agendamento → Confirmação → Home**

## Executar

Pré-requisitos: Node.js 20+ e o aplicativo Expo Go (ou um emulador Android/iOS).

```bash
npm install
npm start
```

Depois, leia o QR code com o Expo Go, pressione `a` para Android, `i` para iOS ou `w` para web. Também estão disponíveis `npm run android`, `npm run ios` e `npm run web`.

## Estrutura

- `App.tsx`: controla o fluxo local entre as quatro telas.
- `src/screens`: telas do MVP.
- `src/components`: componentes visuais reutilizáveis.
- `src/data/mockData.ts`: barbearia, serviços, datas e horários fictícios.
- `src/theme.ts`: cores, sombras e tokens visuais compartilhados.
- `src/types.ts`: contratos TypeScript centrais.

## Escopo atual

Não há backend, login, pagamento, mapa/geolocalização real ou integrações externas. A separação entre dados, tipos, componentes e telas permite substituir gradualmente os mocks por serviços, estado global e navegação persistente nas próximas etapas.
