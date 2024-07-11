// Напишите функцию для поиска значения в n-арном дереве. 
// Если искомое значение отсутствует, 
// необходимо вернуть значение -1. Найдите 11, 1 и 25 узел из дерева.

const tree = [
    {
        node: 1,
        children: [
        {
            node: 2,
            children: [
            {
                node: 3,
                children: [
                {
                    node: 4,
                    children: [
                    {
                        node: 5,
                        children: [],
                    },
                    {
                        node: 6,
                        children: [],
                    },
                    {
                        node: 7,
                        children: [],
                    },
                    {
                        node: 8,
                        children: [],
                    },
                    ],
                },
                {
                    node: 9,
                    children: [],
                },
                ],
            },
            ],
        },
        {
            node: 10,
            children: [
            {
                node: 11,
                children: [
                {
                    node: 12,
                    children: [],
                },
                ],
            },
            {
                node: 13,
                children: [],
            },
            {
                node: 14,
                children: [],
            },
            ],
        },
        ],
    },
];


const recursive = (tree) => {
    let sum = 0;
    tree.forEach(node => {
        sum += node.node;

        if (!node.children) {
            return node.node
        }

        sum += recursive(node.children);
    })

    return sum;
}

const iteration = (tree) => {
    if (!tree.length) {
        return -1;
    }
    let sum = 0;
    let stack = [];
    tree.forEach(node => stack.push(node));
    while (stack.length) {
        const node = stack.pop()
        sum += node.node;
        if (node.children) {
            node.children.forEach(child => stack.push(child));
        }
    }
    return sum;
}


console.log(recursive(tree));
console.log(iteration(tree));