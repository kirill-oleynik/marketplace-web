const getDocumentTop = () => (
  document.documentElement.scrollTop + document.body.scrollTop
);

const getElementTop = (node) => {
  const coords = node.getBoundingClientRect();

  const body = document.body;
  const docNode = document.documentElement;

  const scrollTop = window.pageYOffset || docNode.scrollTop || body.scrollTop;
  const clientTop = docNode.clientTop || body.clientTop || 0;


  return (coords.top + scrollTop) - clientTop;
};

export const scrollToElement = (node) => {
  const speed = 500;
  const frequency = 20;
  const jumps = speed / frequency;

  const documentScrollTop = getDocumentTop();
  const elementScrollTop = getElementTop(node);

  const gap = (elementScrollTop - documentScrollTop) / jumps;

  for (let i = 0; i <= jumps; i++) {
    const position = gap * i;

    setTimeout(
      () => window.scrollTo(0, position + documentScrollTop),
      frequency * i
    );
  }
};
