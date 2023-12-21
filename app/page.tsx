import styles from '@/app/home.module.css';

const boxes = [
  { id: 1, label: '1.*', color: 'red' },
  { id: 2, label: '2.*', color: 'blue' },
  { id: 3, label: '3.*', color: 'green' },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-center gap-4 pb-8 pt-16">
        {boxes.map((box) => {
          return (
            <div
              className={`${styles.box} ${styles[box.color]}`}
            >
              {box.label}
            </div>
          )
        })}
      </div>
      <div className="sm:px-[2%] px-[6%] pb-16">
        <div className="flex justify-center p-8 text-2xl font-mono font-semibold">
          <h1>flex-direction</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
          <div className="grid grid-rows-1 justify-center gap-4">
            <h1 className="flex items-center justify-center text-lg font-mono">row</h1>
            <div className="grid grid-rows-3 gap-2">
              <div className="flex flex-row gap-2">
                <div className={`${styles.box} ${styles.red}`}>1.a</div>
                <div className={`${styles.box} ${styles.red}`}>1.b</div>
                <div className={`${styles.box} ${styles.red}`}>1.c</div>
              </div>
              <div className="flex flex-row gap-2">
                <div className={`${styles.box} ${styles.blue}`}>2.a</div>
                <div className={`${styles.box} ${styles.blue}`}>2.b</div>
                <div className={`${styles.box} ${styles.blue}`}>2.c</div>
              </div>
              <div className="flex flex-row gap-2">
                <div className={`${styles.box} ${styles.green}`}>3.a</div>
                <div className={`${styles.box} ${styles.green}`}>3.b</div>
                <div className={`${styles.box} ${styles.green}`}>3.c</div>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-1 justify-center gap-4">
            <h1 className="flex items-center justify-center text-xl font-mono">column</h1>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col gap-2">
                <div className={`${styles.box} ${styles.red}`}>1.a</div>
                <div className={`${styles.box} ${styles.red}`}>1.b</div>
                <div className={`${styles.box} ${styles.red}`}>1.c</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className={`${styles.box} ${styles.blue}`}>2.a</div>
                <div className={`${styles.box} ${styles.blue}`}>2.b</div>
                <div className={`${styles.box} ${styles.blue}`}>2.c</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className={`${styles.box} ${styles.green}`}>3.a</div>
                <div className={`${styles.box} ${styles.green}`}>3.b</div>
                <div className={`${styles.box} ${styles.green}`}>3.c</div>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-1 justify-center gap-4">
            <h1 className="flex items-center justify-center text-xl font-mono">row-reverse</h1>
            <div className="grid grid-rows-3 gap-2">
              <div className="flex flex-row-reverse gap-2">
                <div className={`${styles.box} ${styles.red}`}>1.a</div>
                <div className={`${styles.box} ${styles.red}`}>1.b</div>
                <div className={`${styles.box} ${styles.red}`}>1.c</div>
              </div>
              <div className="flex flex-row-reverse gap-2">
                <div className={`${styles.box} ${styles.blue}`}>2.a</div>
                <div className={`${styles.box} ${styles.blue}`}>2.b</div>
                <div className={`${styles.box} ${styles.blue}`}>2.c</div>
              </div>
              <div className="flex flex-row-reverse gap-2">
                <div className={`${styles.box} ${styles.green}`}>3.a</div>
                <div className={`${styles.box} ${styles.green}`}>3.b</div>
                <div className={`${styles.box} ${styles.green}`}>3.c</div>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-1 justify-center gap-4">
            <h1 className="flex items-center justify-center text-xl font-mono overflow-auto">col-reverse</h1>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col-reverse gap-2">
                <div className={`${styles.box} ${styles.red}`}>1.a</div>
                <div className={`${styles.box} ${styles.red}`}>1.b</div>
                <div className={`${styles.box} ${styles.red}`}>1.c</div>
              </div>
              <div className="flex flex-col-reverse gap-2">
                <div className={`${styles.box} ${styles.blue}`}>2.a</div>
                <div className={`${styles.box} ${styles.blue}`}>2.b</div>
                <div className={`${styles.box} ${styles.blue}`}>2.c</div>
              </div>
              <div className="flex flex-col-reverse gap-2">
                <div className={`${styles.box} ${styles.green}`}>3.a</div>
                <div className={`${styles.box} ${styles.green}`}>3.b</div>
                <div className={`${styles.box} ${styles.green}`}>3.c</div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 border-b border-dashed border-zinc-800"></div>
        <div className="flex justify-center pt-16 pb-8 text-2xl font-mono font-semibold">
          <h1>align-items</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          <div className="grid grid-rows-1 justify-center gap-4">
            <h1 className="flex items-center justify-center text-lg font-mono">flex-start</h1>     
            <div className="flex items-start h-36">
              <div className="flex gap-2">
                <div className={`${styles.box} ${styles.red}`}>1.a</div>
                <div className={`${styles.box} ${styles.red}`}>1.b</div>
                <div className={`${styles.box} ${styles.red}`}>1.c</div>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-1 justify-center gap-4">
            <h1 className="flex items-center justify-center text-lg font-mono">center</h1>
            <div className="flex items-center h-36">
              <div className="flex items-center gap-2">
                <div className={`${styles.box} ${styles.red}`}>1.a</div>
                <div className={`${styles.box} ${styles.red}`}>1.b</div>
                <div className={`${styles.box} ${styles.red}`}>1.c</div>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-1 justify-center gap-4">
            <h1 className="flex items-center justify-center text-lg font-mono">flex-end</h1>
            <div className="flex items-end h-36">
              <div className="flex items-center gap-2">
                <div className={`${styles.box} ${styles.red}`}>1.a</div>
                <div className={`${styles.box} ${styles.red}`}>1.b</div>
                <div className={`${styles.box} ${styles.red}`}>1.c</div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 border-b border-dashed border-zinc-800"></div>
        <div className="flex justify-center pt-16 pb-8 text-2xl font-mono font-semibold">
          <h1>justify-content</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          <div className="grid grid-rows-1 gap-4"> 
            <h1 className="flex justify-center text-lg font-mono">flex-start</h1>
            <div className="flex justify-start gap-2 h-24">
              <div className={`${styles.box} ${styles.red}`}>1.a</div>
              <div className={`${styles.box} ${styles.red}`}>1.b</div>
              <div className={`${styles.box} ${styles.red}`}>1.c</div>
            </div>
          </div>
          <div className="grid grid-rows-1 gap-4"> 
            <h1 className="flex justify-center text-lg font-mono">center</h1>
            <div className="flex justify-center gap-2 h-24">
              <div className={`${styles.box} ${styles.red}`}>1.a</div>
              <div className={`${styles.box} ${styles.red}`}>1.b</div>
              <div className={`${styles.box} ${styles.red}`}>1.c</div>
            </div>
          </div>
          <div className="grid grid-rows-1 gap-4"> 
            <h1 className="flex justify-center text-lg font-mono">flex-end</h1>
            <div className="flex justify-end gap-2 h-24">
              <div className={`${styles.box} ${styles.red}`}>1.a</div>
              <div className={`${styles.box} ${styles.red}`}>1.b</div>
              <div className={`${styles.box} ${styles.red}`}>1.c</div>
            </div>
          </div>
          <div className="grid grid-rows-1 gap-4"> 
            <h1 className="flex justify-center text-lg font-mono">space-between</h1>
            <div className="flex justify-between h-24">
              <div className={`${styles.box} ${styles.red}`}>1.a</div>
              <div className={`${styles.box} ${styles.red}`}>1.b</div>
              <div className={`${styles.box} ${styles.red}`}>1.c</div>
            </div>
          </div>
          <div className="grid grid-rows-1 gap-4"> 
            <h1 className="flex justify-center text-lg font-mono">space-around</h1>     
            <div className="flex justify-around h-24">
              <div className={`${styles.box} ${styles.red}`}>1.a</div>
              <div className={`${styles.box} ${styles.red}`}>1.b</div>
              <div className={`${styles.box} ${styles.red}`}>1.c</div>
            </div>
          </div>
          <div className="grid grid-rows-1 gap-4"> 
            <h1 className="flex justify-center text-lg font-mono">space-evenly</h1>     
            <div className="flex justify-evenly h-24">
              <div className={`${styles.box} ${styles.red}`}>1.a</div>
              <div className={`${styles.box} ${styles.red}`}>1.b</div>
              <div className={`${styles.box} ${styles.red}`}>1.c</div>
            </div>
          </div>
        </div>
        <div className="py-8 border-b border-dashed border-zinc-800"></div>
        <div className="flex justify-center pt-16 pb-8 text-2xl font-mono font-semibold">
          <h1>align-content</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          <div className="grid grid-rows-1 gap-4"> 
            <h1 className="flex justify-center text-lg font-mono">flex-start</h1>
            <div className="grid grid-cols-3 gap-4 place-items-center content-start h-36">
              <div className={`${styles.box} ${styles.red}`}>1.a</div>
              <div className={`${styles.box} ${styles.red}`}>1.b</div>
              <div className={`${styles.box} ${styles.red}`}>1.c</div>
              <div className={`${styles.box} ${styles.blue}`}>2.a</div>
              <div className={`${styles.box} ${styles.blue}`}>2.b</div>
              <div className={`${styles.box} ${styles.blue}`}>2.c</div>
            </div>
          </div>
          <div className="grid grid-rows-1 gap-4"> 
            <h1 className="flex justify-center text-lg font-mono">center</h1>
            <div className="grid grid-cols-3 gap-4 place-items-center content-center h-36">
              <div className={`${styles.box} ${styles.red}`}>1.a</div>
              <div className={`${styles.box} ${styles.red}`}>1.b</div>
              <div className={`${styles.box} ${styles.red}`}>1.c</div>
              <div className={`${styles.box} ${styles.blue}`}>2.a</div>
              <div className={`${styles.box} ${styles.blue}`}>2.b</div>
              <div className={`${styles.box} ${styles.blue}`}>2.c</div>
            </div>
          </div>
          <div className="grid grid-rows-1 gap-4"> 
            <h1 className="flex justify-center text-lg font-mono">flex-end</h1>
            <div className="grid grid-cols-3 gap-4 place-items-center content-end h-36">
              <div className={`${styles.box} ${styles.red}`}>1.a</div>
              <div className={`${styles.box} ${styles.red}`}>1.b</div>
              <div className={`${styles.box} ${styles.red}`}>1.c</div>
              <div className={`${styles.box} ${styles.blue}`}>2.a</div>
              <div className={`${styles.box} ${styles.blue}`}>2.b</div>
              <div className={`${styles.box} ${styles.blue}`}>2.c</div>
            </div>
          </div>
          <div className="grid grid-rows-1 gap-4"> 
            <h1 className="flex justify-center text-lg font-mono">stretch</h1>
            <div className="grid grid-cols-3 gap-4 content-stretch h-36">
              <div className={`${styles.box} ${styles.red}`}>1.a</div>
              <div className={`${styles.box} ${styles.red}`}>1.b</div>
              <div className={`${styles.box} ${styles.red}`}>1.c</div>
              <div className={`${styles.box} ${styles.blue}`}>2.a</div>
              <div className={`${styles.box} ${styles.blue}`}>2.b</div>
              <div className={`${styles.box} ${styles.blue}`}>2.c</div>
            </div>
          </div>
          <div className="grid grid-rows-1 gap-4"> 
            <h1 className="flex justify-center text-lg font-mono">space-between</h1>
            <div className="grid grid-cols-3 gap-4 place-items-center content-between h-36">
              <div className={`${styles.box} ${styles.red}`}>1.a</div>
              <div className={`${styles.box} ${styles.red}`}>1.b</div>
              <div className={`${styles.box} ${styles.red}`}>1.c</div>
              <div className={`${styles.box} ${styles.blue}`}>2.a</div>
              <div className={`${styles.box} ${styles.blue}`}>2.b</div>
              <div className={`${styles.box} ${styles.blue}`}>2.c</div>
            </div>
          </div>
          <div className="grid grid-rows-1 gap-4"> 
            <h1 className="flex justify-center text-lg font-moredno">space-between</h1>
            <div className="grid grid-cols-3 gap-4 place-items-center content-around h-36">
              <div className={`${styles.box} ${styles.red}`}>1.a</div>
              <div className={`${styles.box} ${styles.red}`}>1.b</div>
              <div className={`${styles.box} ${styles.red}`}>1.c</div>
              <div className={`${styles.box} ${styles.blue}`}>2.a</div>
              <div className={`${styles.box} ${styles.blue}`}>2.b</div>
              <div className={`${styles.box} ${styles.blue}`}>2.c</div>
            </div>
          </div>
        </div>
      </div>      
    </>
  )
}