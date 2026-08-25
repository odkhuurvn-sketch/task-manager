# Student Task Manager

Даалгавар удирдах жижиг веб апп — 15 өдрийн дадлагын хугацаанд хийсэн төсөл.

## Онцлог (Features)

- Task үүсгэх, засах, дуусгах, дахин идэвхжүүлэх, устгах
- Task бүрт priority (low / medium / high) болон due date оноох
- Title, description-оор task хайх
- Status (all / active / completed) болон priority-гоор шүүх
- Live статистик харах (нийт, идэвхтэй, дууссан, гүйцэтгэлийн хувь)
- localStorage ашиглан browser дээр task хадгалах — refresh хийсэн ч алдагдахгүй
- Mobile болон desktop дэлгэцэнд зохицсон дизайн

## Ашигласан технологи (Technologies)

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- localStorage (сервер, database ашиглаагүй)

## Суулгах, ажиллуулах (Installation)

```bash
pnpm install
pnpm dev
```

Дараа нь [http://localhost:3000]хаягаар нээнэ.

## Build, lint шалгах

```bash
pnpm lint
pnpm build
```

## Төслийн бүтэц (Project structure)

```
student-task-manager/
|-- app/
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- components/
|   |-- Header.tsx
|   |-- TaskForm.tsx
|   |-- TaskItem.tsx
|   |-- TaskList.tsx
|   `-- TaskStats.tsx
|-- types/
|   `-- task.ts
|-- public/
|   `-- screenshots/
`-- README.md
```

## Хязгаарлалт (Known limitations)

- Өгөгдөл зөвхөн тухайн browser дээр хадгалагдана. Өөр browser эсвэл
  төхөөрөмж дээр нээвэл хоосон жагсаалт харагдана.
- Хэрэглэгчийн бүртгэл (login) байхгүй.
- Сервер эсвэл cloud database байхгүй тул task-уудыг хэрэглэгчид/
  төхөөрөмжүүдийн хооронд хуваалцах боломжгүй.
- Browser-ийн storage/site data-г цэвэрлэвэл бүх task бүрмөсөн устана.

## Юу сурсан бэ (What I learned)

- React дотор **state** (`useState`) болон **props** хэрхэн хамтран
  ажилладаг вэ — эцэг component-с хүүхэд component рүү өгөгдөл дамжуулах,
  мөн callback prop-уудаар (`onAddTask`, `onToggle`, `onDelete`, `onEdit`)
  хүүхдээс эцэг рүү мэдээлэл буцаан илгээх.
- Яагаад React дотор array-г шууд өөрчилдөггүй (immutable) вэ — task
  шинэчлэхэд `map`, устгахад `filter` ашигладаг, шууд `.push()` хийдэггүй
  шалтгаан.
- **`useEffect`**-ийг ашиглан localStorage гэсэн гадаад системтэй хэрхэн
  state-ээ синхрон байлгадаг вэ (унших, бичих хоёуланд нь).
- Яагаад task бүрт unique `id` хэрэгтэй вэ, мөн `key` prop нь React-д
  жагсаалтын аль элемент аль нь болохыг хэрхэн тодорхойлоход тусалдаг вэ.
- TypeScript нь энгийн JavaScript-аас илүү юу барьж авдаг вэ (жишээ нь
  `priority`-г зөвхөн `"low" | "medium" | "high"` гэсэн 3 утгаар
  хязгаарлах боломж).

## Screenshot-ууд

```markdown
![Main view](https://1drv.ms/i/c/644d3864491f861f/IQCrfAq_ZAduSq1yZmVXzzNcAZeQNAwTFuAAlh2bJAaEM3k?e=fbCWRu)
![Mobile view](https://1drv.ms/i/c/644d3864491f861f/IQB1Szv0zmNQQ7MARzZnEvinAVszZla4aHZ5rLCOmPQsF7s?e=aIPh3Z)
```

## Цаашид сайжруулж болох зүйлс (Possible future improvements)

- Dark mode
- Due date/created date-ээр эрэмбэлэх (sort)
- Task-д категори/tag нэмэх
- Task-уудыг JSON болгож экспорт/импорт хийх
- Хугацаа хэтэрсэн (overdue) task-ыг тодруулах
- Жижиг автомат тест бичих