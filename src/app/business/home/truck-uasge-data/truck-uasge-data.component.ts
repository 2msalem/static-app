import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-truck-uasge-data',
  templateUrl: './truck-uasge-data.component.html',
  styleUrls: ['./truck-uasge-data.component.css'],
})
export class TruckUasgeDataComponent implements OnInit {
  @ViewChild('printData', { static: false })
  printData: ElementRef;
  products: any[] = [];
  originalProductsList: any[] = [];
  yaersFilter: any[] = [];
  yearSelected: { name?: string; value?: number } = { name: 'All', value: -1 };

  constructor() {
    // this.printData.nativeElement
  }

  ngOnInit(): void {
    this.yaersFilter = [
      {
        name: 'All',
        value: -1,
      },
      {
        name: '2019',
        value: 2019,
      },
      {
        name: '2020',
        value: 2020,
      },
    ];
    this.originalProductsList = [
      {
        code: '123',
        name: 'prod 1',
        category: 'cat 1',
        year: 2019,
        quantity: '2',
      },
      {
        code: '456',
        name: 'prod 2',
        category: 'cat 2',
        year: 2019,
        quantity: '4',
      },
      {
        code: '4444',
        name: 'prod 3',
        year: 2020,
        category: 'cat 3',
        quantity: '23',
      },
      {
        code: '999',
        year: 2020,
        name: 'prod 4',
        category: 'cat 4',
        quantity: '657',
      },
    ];
    this.products = this.originalProductsList;
  }

  updateYearSelected() {
    if (this.yearSelected.name === 'all') {
      this.products = this.originalProductsList;
      return;
    }

    this.products = this.originalProductsList.filter(
      (item) => item.year === this.yearSelected.value
    );
  }

  addStylesToPrintWindow(popupWin: any) {
    // parentHeadContent = parentHeadContent.replace(/<link.+?(?=>)/, '') + '<style> .hide-in-print {display: none}</style>';
    //  popupWin.document.getElementsByTagName('head')[0].innerHTML = document.getElementsByTagName('head')[0].innerHTML +
    // '<style> .hide-in-print {display: none}</style>';
    const parentHeadElement = document
      .getElementsByTagName('head')[0]
      .cloneNode(true);
    const links = (<HTMLElement>parentHeadElement).getElementsByTagName('link');
    let indexTemp = 0;
    while (links.length > indexTemp) {
      if (links[indexTemp].getAttribute('href') !== 'styles.css') {
        parentHeadElement.removeChild(links[indexTemp]);
      } else {
        indexTemp++;
      }
    }
    const parentHeadContent = (<HTMLElement>parentHeadElement).innerHTML;
    popupWin.document.getElementsByTagName('head')[0].innerHTML =
      parentHeadContent + '<style> .hide-in-print {display: none;}</style>';
    if (popupWin.document.getElementsByTagName('th').length > 6) {
      popupWin.document.getElementsByTagName('head')[0].innerHTML =
        parentHeadContent + '<style>  body { zoom: 75%;}</style>';
    }
  }

  addScriptsToPrintWindow(popupWin: any) {
    // parentHeadContent = parentHeadContent.replace(/<link.+?(?=>)/, '') + '<style> .hide-in-print {display: none}</style>';
    //  popupWin.document.getElementsByTagName('head')[0].innerHTML = document.getElementsByTagName('head')[0].innerHTML +
    // '<style> .hide-in-print {display: none}</style>';
    const parentBodyElement = document
      .getElementsByTagName('body')[0]
      .getElementsByTagName('script');
    // const script = ;
    let indexTemp = 0;
    // while (script.length > indexTemp) {
    //   parentHeadElement.removeChild(script[indexTemp]);
    //   // if (script[indexTemp].getAttribute("src") !== "styles.css") {
    //   // } else {
    //   //   indexTemp++;
    //   // }
    // }
    // popupWin.document.getElementsByTagName("head")[0].innerHTML =
    // parentBodyContent + "<script> .hide-in-print {display: none;}</script>";
    console.log(parentBodyElement);
    popupWin.document.getElementsByTagName('head')[0].innerHTML += `
    <script src="runtime.js" defer=""></script><script src="polyfills.js" defer=""></script><script src="styles.js" defer=""></script><script src="scripts.js" defer=""></script><script src="vendor.js" defer=""></script><script src="main.js" defer=""></script>
    `;
    // for(const ele in parentBodyElement)

    // // if (popupWin.document.getElementsByTagName("th").length > 6) {
    // }
  }

  openPrintWindow() {
    //  this.addStylesToPrintWindow commented as it causes the body not to be rendered.
    const printContents = this.printData.nativeElement.innerHTML;
    if (!printContents) return;
    const popupWin = window.open(
      '',
      '_blank',
      'top=0,left=0,height=500px,width=auto'
    );
    popupWin?.document.open();
    /* height: auto is added to fix blank page issue on Safari */
    popupWin?.document.write(`
      <html>
        <head>
        <title>Print Page</title>
        </head>
    <body  class="px-2 py-3" id="print" style="height:auto;">${printContents}
    <script>
    // setTimeout(function(){
    //   window.print();
    //    setTimeout(function(){window.close();}, 1);
    // }, 2000);
    </script>
    </body>
      </html>`);
    this.addStylesToPrintWindow(popupWin);
    this.addScriptsToPrintWindow(popupWin);
    const printSection = popupWin?.document.getElementById('printable-section');
    if (printSection) {
      printSection.className += ' pt-2 ';
    }
    // print stylehseet might be used later <link href='../../../../assets/styles/css/print.css'  rel="stylesheet" type="text/css">
    // const table = printSection.getElementsByTagName('table')[0];
    // table.className += ' m-4 flex-grow ';
    // const thead = table.getElementsByTagName('thead')[0];
    // thead.className = '';
    // thead.style.backgroundColor = 'white';
    // this.printWhenPageIsReady(popupWin);
    /*  setTimeout(() => {
      popupWin.print();
      popupWin.close();
    }, 2000); */
  }
}
