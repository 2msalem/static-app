import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { toJpeg } from 'html-to-image';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  @ViewChild('printData', { static: false })
  printData: ElementRef;
  basicData = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'over',
    ],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: '#42A5F5',
        data: [65, 59, 80, 81, 56, 55, 40, 150],
      },
      {
        label: 'My Second dataset',
        backgroundColor: '#FFA726',
        data: [28, 48, 40, 19, 86, 27, 90, 120],
      },
    ],
  };

  basicOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#495057',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#495057',
        },
        grid: {
          color: '#ebedef',
        },
      },
      y: {
        ticks: {
          color: '#495057',
        },
        grid: {
          color: '#ebedef',
        },
      },
    },
  };

  stackedData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        type: 'bar',
        label: 'Dataset 1',
        backgroundColor: '#42A5F5',
        data: [50, 25, 12, 48, 90, 76, 42],
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: '#66BB6A',
        data: [21, 84, 24, 75, 37, 65, 34],
      },
      {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: '#FFA726',
        data: [41, 52, 24, 74, 23, 21, 32],
      },
    ],
  };

  stackedOptions = {
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    responsive: true,
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  constructor() {}

  ngOnInit(): void {}

  selectData(value: any) {
    console.log(value);
  }

  onPrint(htmlData: HTMLDivElement) {
    // let printContents, popupWin;
    // printContents = document.getElementById('section-to-print')?.innerHTML;
    // console.log(printContents)
    // popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    // popupWin?.document.open();
    // popupWin?.document.write(`
    //   <html>
    //     <head>
    //       <title>Print tab</title>
    //       <style>
    //       //........Customized style.......
    //       </style>
    //     </head>
    // <body onload="window.print();window.close()">${printContents}</body>
    //   </html>`
    // );
    // popupWin?.document.close();

    const printContents = this.printData.nativeElement.innerHTML;
    if (!printContents) return;
    var popupWin = window.open('', '_blank', 'width=300,height=300');
    popupWin?.document.open();
    popupWin?.document.write(
      `<html><head>
      <base href="../../../../../">

      <link rel="stylesheet" type="text/css" href="node_modules/primeng/resources/themes/saga-blue/theme.css" />
      <link rel="stylesheet" type="text/css" href="node_modules/primeng/resources/primeng.min.css" />
      <link rel="stylesheet" type="text/css" href="node_modules/bootstrap/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" type="text/css" href="styles.css" />
      <script src="node_modules/chart.js/dist/Chart.js"></script>
      <script src="node_modules/@popperjs/core/dist/umd/popper.min.js"></script>
      <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

      </head><body onload="">` +
        printContents +
        '</body></html>'
    );
    popupWin?.document.close();

    // console.log(htmlData.innerHTML);
    // const printWindow = window.open(
    //   '',
    //   '_blank',
    //   'top=0,left=0,height=500px,width=auto'
    // );
    // printWindow?.document.open();

    // printWindow?.document.write(`
    //   <html>
    //     <head>
    //     <title>Print Page</title>
    //     </head>
    // <body  class="px-2 py-3" id="print" style="height:auto;">${htmlData.innerHTML}
    // <script>
    // // setTimeout(function(){
    // //   window.print();
    // //    setTimeout(function(){window.close();}, 1);
    // // }, 2000);
    // // </script>
    // </body>
    //   </html>`);
    // window.print();
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
    const canvas = document.createElement('canvas');
    canvas.height = 590;
    canvas.width = 600;
    const context = canvas.getContext('2d');

    const image = document?.getElementById('section-to-print');
    if (!image || !context) return;
    toJpeg(image).then((url) => {
      console.log(url)
      var image = new Image();
      image.src = url;

      context.drawImage(image, 0, 0);
      const imageData = canvas.toDataURL('image/jpeg').replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
      console.log(canvas.toDataURL('image/jpeg'));
    })
  }
}
